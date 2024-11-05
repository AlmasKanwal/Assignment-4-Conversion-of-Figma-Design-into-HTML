import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import {Heebo, Inter} from 'next/font/google';

const heebo = Heebo({
  weight: ['400', '700', '900'], 
  subsets: ['latin'], 
});

const inter = Inter({
  weight: ['400', '700'], 
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  title: "Assignment 4",
  description: "Assignment 4: Convert the provided Figma design into HTML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={heebo.className} 
      >
        <NavBar fontClass={inter.className} />
        {children}
      </body>
    </html>
  );
}



