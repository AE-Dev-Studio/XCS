import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/footer";
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
    <html lang="en" className="overflow-x-hidden ">
      <body className="bg-black overflow-x-hidden">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
