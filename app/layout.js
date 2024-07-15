"use-client"

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'OTT Website',
  description: 'An OTT platform with server-side rendering capabilities',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
