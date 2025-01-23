import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./AuthProvider";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simple Blogs",
  description: "Blogs website",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" >
      <body
        className={`${geistSans.variable} bg-white text-black ${geistMono.variable} antialiased`}
        >
        <Navbar></Navbar>
        <div className="min-h-screen">
        {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
    </AuthProvider>
  );
}
