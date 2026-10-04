"use client";

// Importing css & client js files
import './layout.css'; 
import  LayoutScript from './layout.js';

// Server components that replace <a href> and <script> tags
import Link from 'next/link';
import Script from 'next/script';

// Bridge that allows safely embedding traditional JavaScript (Vanilla JS) code within a React component.
import { useEffect } from 'react';

// TypeScript definition to specify the data types the RootLayout component is allowed to receive.
interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {

 useEffect(() => {
    document.title = "My Testing Nextjs Webpage";
    const cleanup = (LayoutScript as any)();

    return () => { 
      if (typeof cleanup === 'function') { (cleanup as Function)(); }
    };
  });
  
  return (
    <html lang="es">
      <body>
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