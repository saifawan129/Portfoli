import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Main from "./main";
import GitHubIcon from "./icons/github";
import CiLinkedin from "./icons/linkedin";
import GmailIcon  from "./icons/gmail";
import Section from "./section";
import Projects from "./projects";
import Bottom from "./bottom";
import Tools from "./Tools";
import Services from "./services";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saif ur Rehman",
  description: "Portfolio for freelance by Saif",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Main />
        <div className="flex items-center ml-20 space-x-4 mt-4 hover:text-green-600">
        <GitHubIcon  />
         <GmailIcon />
         <CiLinkedin />
        </div>
        <Section />
        <Projects />
        <Bottom />
        <Tools />
        <Services />
        <Footer />


        
      </body>
    </html>
  );
}
