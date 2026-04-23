import { Geist, Geist_Mono, Poppins, Montserrat, Roboto, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const nunito = Nunito({
  weight: ['400', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Webstep Solutions",
  description: "Enterprise Software Development at Scale",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} ${roboto.variable} ${nunito.variable} antialiased font-roboto`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}