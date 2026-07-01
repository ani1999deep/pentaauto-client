import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Penta Automation",
    template: "%s | Penta Automation",
  },

  description:
    "Industrial automation solutions for PLC, DCS, SCADA, control panels, industrial monitoring, and engineering services.",

  keywords: [
    "Industrial Automation",
    "PLC",
    "SCADA",
    "Control Panels",
    "Engineering",
    "Penta Automation",
  ],

  openGraph: {
    title: "Penta Automation",
    description: "Delivering smart automation solutions since 2012.",

    url: "https://www.pentaauto.co.in/",

    siteName: "Penta Automation",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Penta Automation",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Penta Automation",
    description: "Delivering smart automation solutions since 2012.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
