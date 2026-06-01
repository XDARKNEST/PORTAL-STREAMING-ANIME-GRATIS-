import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Streaming Anime Gratis — Tanpa Login",
  description:
    "Portal streaming anime gratis tanpa login. Akses cepat ke server utama, server cadangan, dan grup WhatsApp update domain.",
  keywords: ["streaming anime", "anime gratis", "nonton anime", "tanpa login"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Streaming Anime Gratis — Tanpa Login",
    description: "Portal streaming anime gratis tanpa login.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
