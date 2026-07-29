import type { Metadata } from "next";
import { Great_Vibes, Plus_Jakarta_Sans, Be_Vietnam_Pro, Mea_Culpa } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: ["400"],
});

const meaCulpa = Mea_Culpa({
  subsets: ["latin"],
  variable: "--font-mea-culpa",
  display: "swap",
  weight: ["400"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Taxi Tour 76 | Dịch Vụ Taxi & Xe Ghép Giá Rẻ - dichvutaxitour76.com",
  description:
    "Dịch vụ Taxi Tour 76 - Chuyên xe taxi riêng, xe ghép đi tỉnh, taxi đưa đón sân bay và xe hợp đồng tour du lịch giá rẻ, uy tín, đưa đón tận nhà 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`scroll-smooth ${greatVibes.variable} ${meaCulpa.variable} ${plusJakarta.variable} ${beVietnamPro.variable}`}>
      <body className="bg-background text-on-background typo-body selection:bg-primary selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
