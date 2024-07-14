
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata = {
  title: "Samlois",
  description: "Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
         <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

