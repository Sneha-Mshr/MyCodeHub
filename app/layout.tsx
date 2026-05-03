import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sneha Mishra — Full-Stack Developer",
  description:
    "Portfolio of Sneha Mishra — Full-Stack Developer, Gen AI Enthusiast, and Competitive Programmer at NIT Hamirpur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
