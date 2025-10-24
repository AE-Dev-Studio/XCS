import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/Nav";
export const metadata: Metadata = {
  title: "Luxury Chaffeur Service",
  description: "Luxury Chaffeur Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Nav />
        {children}
      </body>
    </html>
  );
}
