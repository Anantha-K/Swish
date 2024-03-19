import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from './Components/Footer.tsx'
import Nav from './Components/Nav.tsx'
import MobNav from "./Components/mobNav.tsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swish",
  description: "Ecommerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav/>
        {children}
        <MobNav/>
      <Footer/>

        </body>
    </html>
  );
}
