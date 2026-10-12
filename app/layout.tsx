// Importing css & client js files
import './layout.css'; 
import LayoutClientComponent from './LayoutClientComponent';

// Server components that replace <a href> and <script> tags
import Link from 'next/link';

export const metadata = {
  title: "My Testing Nextjs Webpage",
  description: "Test page in Next.js",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <nav><Link href="/">Home</Link>&nbsp;&nbsp;&nbsp;<Link href="/users">Users</Link>&nbsp;&nbsp;&nbsp;<Link href="/speechAI">Speech-AI</Link></nav>
        <main>
          <div className="contenedor"><LayoutClientComponent>
            {children}
          </LayoutClientComponent></div>
        </main>
        <footer>
          <p>© 2026 My Testing Web Site</p>
        </footer>
      </body>
    </html>
  );
}