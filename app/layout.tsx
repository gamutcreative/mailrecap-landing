import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MailRecap – Your Physical Mail, Managed Simply",
  description:
    "MailRecap is the fast, trusted, and transparent app for managing your physical mail. See every piece of mail, track deliveries, and stay organized—wherever you are.",
  keywords: "mail management, physical mail, postal mail, mail tracking, mail app",
  openGraph: {
    title: "MailRecap – Your Physical Mail, Managed Simply",
    description:
      "Fast, trusted, and transparent physical mail management. Download MailRecap and never miss important mail again.",
    url: "https://mailrecap.co",
    siteName: "MailRecap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MailRecap – Your Physical Mail, Managed Simply",
    description:
      "Fast, trusted, and transparent physical mail management. Download MailRecap today.",
  },
  metadataBase: new URL("https://mailrecap.co"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
