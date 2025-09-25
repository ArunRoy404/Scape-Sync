import { Public_Sans } from "next/font/google";
import "./globals.css";


const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "ScapeSync",
  description: "Landscaping Management Software",
   icons: {
    icon: "/Logo/LogoSingle.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
