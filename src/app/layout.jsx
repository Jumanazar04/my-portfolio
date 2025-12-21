export const metadata = {
  title: "Jumanazar | Frontend Developer",
  description: "Portfolio built with Next.js and MUI",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

import ThemeRegistry from "@/theme/ThemeRegistry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
