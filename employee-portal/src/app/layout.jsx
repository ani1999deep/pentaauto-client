import "./globals.css";

export const metadata = {
  title: "Penta Automation | Employee Portal",
  description: "Internal Employee Management System",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#F8FAFC]">{children}</body>
    </html>
  );
}
