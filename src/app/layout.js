import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Util/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Anime List",
  description: "Website Anime From Bang Dea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
