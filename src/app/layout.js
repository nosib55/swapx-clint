import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FirebaseAuthProvider from "./components/FirebaseAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SWAPX - ReUse, ReCycle, ReLove",
  description: "Buy and sell new or second-hand products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        
        <FirebaseAuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </FirebaseAuthProvider>

      </body>
    </html>
  );
}
