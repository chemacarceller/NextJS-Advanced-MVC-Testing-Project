'use client';
import Script from 'next/script'; 
import './error.css';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {

  const cause = error.cause as { statusCode?: number } | undefined;

  const errorCode = cause?.statusCode || 500;
  const message = error.message || "Ha ocurrido un error inesperado.";

  return (
    <>
    <Script 
        src="/js/error.js" 
        strategy="afterInteractive"
        onLoad={() => console.log('El script cliente se cargó con éxito')}
    />
    <div className="error-layout">
      <h1 className="error-titulo">Error {errorCode}</h1>
      <p className="error-texto">{message}</p>
    </div>
    </>
  );
}
