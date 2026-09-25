import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

import './layout.css'; 

export const metadata: Metadata = {
  title: 'My Testing Web Site',
  description: 'Sitio web de pruebas',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <Script src="/js/layout.js" strategy="afterInteractive" />
        <nav>
          <Link href="/">Home</Link>
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <p>© 2026 My Testing Web Site</p>
        </footer>
      </body>
    </html>
  );
}
