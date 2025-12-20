import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Ackunity | V1.0 Beta",
  description: "Unified Notification Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
