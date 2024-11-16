import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./components/navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Chefs Solidarios",
  description: "Cocinando para ti con mucho cariño",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-2 md:px-5`}
      >
        <div className="!z-50">
          <Nav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
