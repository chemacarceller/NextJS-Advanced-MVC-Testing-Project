import './layout.css'; 
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <Script src="js/layout.js" strategy="afterInteractive" />
        <nav><Link href="/">Home</Link>&nbsp;&nbsp;&nbsp;<Link href="/users">Users</Link>&nbsp;&nbsp;&nbsp;<Link href="/speechAI">Speech-AI</Link></nav>
        <main>
          <div className="contenedor">
            {children}
          </div>
        </main>
        <footer>
          <p>© 2026 My Testing Web Site</p>
        </footer>
      </body>
    </html>
  );
}