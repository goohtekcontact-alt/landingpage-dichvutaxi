import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://dichvutaxitour76.com"),
  title: {
    default: "Taxi Tour 76 | Dịch Vụ Taxi & Xe Ghép Giá Rẻ Quảng Ngãi 24/7",
    template: "%s | Taxi Tour 76"
  },
  description:
    "Dịch vụ Taxi Tour 76 Quảng Ngãi - Chuyên xe taxi 4-7 chỗ trọn chuyến, xe ghép đi tỉnh Đà Nẵng, Chu Lai, Sa Kỳ, Măng Đen, đưa đón sân bay & xe đám tiệc uy tín 24/7.",
  keywords: [
    "taxi quảng ngãi",
    "xe ghép quảng ngãi",
    "dịch vụ taxi tour 76",
    "dichvutaxitour76.com",
    "taxi đà nẵng quảng ngãi",
    "xe ghép đà nẵng quảng ngãi",
    "taxi sa kỳ quảng ngãi",
    "taxi chu lai quảng ngãi",
    "xe ghép măng đen quảng ngãi",
    "thuê xe đám tiệc quảng ngãi"
  ],
  authors: [{ name: "Taxi Tour 76", url: "https://dichvutaxitour76.com" }],
  creator: "Taxi Tour 76",
  publisher: "Taxi Tour 76",
  alternates: {
    canonical: "https://dichvutaxitour76.com"
  },
  openGraph: {
    title: "Taxi Tour 76 | Dịch Vụ Taxi & Xe Ghép Giá Rẻ Quảng Ngãi 24/7",
    description:
      "Đặt xe Taxi & Xe ghép Quảng Ngãi nhanh chóng 24/7. Đội xe đời mới, đón trả tận nhà, giá cước công khai minh bạch. Gọi ngay 02558.9999.76!",
    url: "https://dichvutaxitour76.com",
    siteName: "Taxi Tour 76 Quảng Ngãi",
    images: [
      {
        url: "https://dichvutaxitour76.com/images/image_hero_1.png",
        width: 1200,
        height: 630,
        alt: "Taxi Tour 76 Quảng Ngãi - Dịch vụ Taxi & Xe ghép"
      }
    ],
    locale: "vi_VN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Tour 76 | Dịch Vụ Taxi & Xe Ghép Giá Rẻ Quảng Ngãi 24/7",
    description:
      "Đặt xe Taxi & Xe ghép Quảng Ngãi nhanh chóng 24/7. Đội xe đời mới, đón trả tận nhà. Hotline: 02558.9999.76",
    images: ["https://dichvutaxitour76.com/images/image_hero_1.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Taxi Tour 76 Quảng Ngãi",
    "url": "https://dichvutaxitour76.com",
    "logo": "https://dichvutaxitour76.com/images/logo.png",
    "image": "https://dichvutaxitour76.com/images/image_hero_1.png",
    "telephone": "02558999976",
    "priceRange": "120.000đ - 1.800.000đ",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "TP. Quảng Ngãi",
      "addressRegion": "Tỉnh Quảng Ngãi",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 15.1205,
      "longitude": 108.7923
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": ["Quảng Ngãi", "Đà Nẵng", "Chu Lai", "Sa Kỳ", "Măng Đen"]
  };

  return (
    <html lang="vi" className={`scroll-smooth ${greatVibes.variable} ${meaCulpa.variable} ${plusJakarta.variable} ${beVietnamPro.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18363431861"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18363431861');
            `,
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NKN65L2P');
            `,
          }}
        />
      </head>
      <body className="bg-background text-on-background typo-body selection:bg-primary selection:text-white antialiased overflow-x-hidden w-full">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKN65L2P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
