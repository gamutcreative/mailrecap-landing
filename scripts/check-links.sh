#!/usr/bin/env bash
# MailRecap Landing — Outbound Link Validator
# Run before every deployment to catch broken CTAs.
# Usage: bash scripts/check-links.sh
# Exit code 0 = all links OK, 1 = one or more failures.

set -euo pipefail

PASS=0
FAIL=0
WARN=0

check_link() {
  local label="$1"
  local url="$2"
  local expected_status="${3:-200}"

  http_status=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 -L "$url" 2>/dev/null || echo "000")

  if [ "$http_status" = "$expected_status" ]; then
    echo "  PASS [$http_status] $label"
    echo "       $url"
    PASS=$((PASS + 1))
  else
    echo "  FAIL [$http_status] $label"
    echo "       $url"
    echo "       Expected HTTP $expected_status, got $http_status"
    FAIL=$((FAIL + 1))
  fi
  echo ""
}

check_contains() {
  local label="$1"
  local url="$2"
  local expected_pattern="$3"

  body=$(curl -s --max-time 10 -L "$url" 2>/dev/null || echo "")

  if echo "$body" | grep -q "$expected_pattern"; then
    echo "  PASS [content-ok] $label"
    echo "       $url"
    PASS=$((PASS + 1))
  else
    echo "  WARN [content?] $label"
    echo "       $url"
    echo "       Pattern not found: $expected_pattern"
    WARN=$((WARN + 1))
  fi
  echo ""
}

echo "========================================"
echo " MailRecap Link Validator"
echo " $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
echo "========================================"
echo ""

echo "--- Critical App Store CTAs ---"
echo ""

# iOS App Store — correct canonical URL (MAIA-35 regression source)
check_link \
  "iOS App Store" \
  "https://apps.apple.com/us/app/mailrecap-co/id6756124597" \
  "200"

# Validate App Store page content contains MailRecap
check_contains \
  "iOS App Store — content check (MailRecap)" \
  "https://apps.apple.com/us/app/mailrecap-co/id6756124597" \
  "MailRecap"

# Google Play Store
check_link \
  "Google Play Store" \
  "https://play.google.com/store/apps/details?id=com.mailrecap" \
  "200"

echo "--- Source Code Link Audit ---"
echo ""

# Verify that correct App Store URL is present in source (not broken legacy URL)
LEGACY_IOS="https://apps.apple.com/app/mailrecap"
CORRECT_IOS="https://apps.apple.com/us/app/mailrecap-co/id6756124597"

if grep -r "$LEGACY_IOS" app/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.html" 2>/dev/null | grep -v node_modules; then
  echo "  FAIL [source] Legacy/broken iOS App Store URL found in source code"
  echo "       Replace: $LEGACY_IOS"
  echo "       With:    $CORRECT_IOS"
  FAIL=$((FAIL + 1))
else
  echo "  PASS [source] No legacy iOS App Store URL in source"
  PASS=$((PASS + 1))
fi
echo ""

if grep -r "$CORRECT_IOS" app/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" --include="*.html" 2>/dev/null | grep -v node_modules | grep -q .; then
  echo "  PASS [source] Correct iOS App Store URL present in source"
  PASS=$((PASS + 1))
else
  echo "  FAIL [source] Correct iOS App Store URL NOT found in source — may not be wired up"
  FAIL=$((FAIL + 1))
fi
echo ""

echo "========================================"
echo " Results: $PASS passed, $WARN warnings, $FAIL failed"
echo "========================================"

if [ "$FAIL" -gt 0 ]; then
  echo " STATUS: FAIL — fix all failures before deploying"
  exit 1
elif [ "$WARN" -gt 0 ]; then
  echo " STATUS: WARN — review warnings before deploying"
  exit 0
else
  echo " STATUS: PASS — all critical links verified"
  exit 0
fi
