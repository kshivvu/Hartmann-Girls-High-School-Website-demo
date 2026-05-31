import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Marquee } from "@/components/Marquee";
import "./styles.css";

const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Hartmann Girls' High School | Digha, Patna",
  description: "Hartmann Girls' High School is a Catholic institution established in Digha, Patna in 1959.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable}`}><Marquee />{children}</body>
    </html>
  );
}
