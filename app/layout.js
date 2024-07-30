import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavbarClient from "./components/NavbarClient";
import { Providers } from "./providers";

export const metadata = {
  title: "OTT Website",
  description: "An OTT platform with server-side rendering capabilities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavbarClient/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
