import "./globals.css";

export const metadata = {
  title: "Employee Portal",
  description: "Company Employee Login System",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
