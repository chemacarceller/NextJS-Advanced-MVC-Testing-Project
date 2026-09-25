import Script from 'next/script'; 
import './index.css';

export default function HomePage() {
  const message = "¡Bienvenido a mi sitio!";

  return (
    <>
    <Script src="/js/index.js" strategy="afterInteractive" />
    <div className="home-layout">
      <div className="contenedor">
        <h1>{message}</h1>
        <p>This page is being dynamically rendered from the Next.js server.</p>
      </div>
    </div>
    </>
  );
}