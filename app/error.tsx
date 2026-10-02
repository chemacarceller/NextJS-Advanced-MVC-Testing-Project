'use client';

import '@/app/error.css';
import ErrorScript from "./error.js";
import Script from 'next/script'; 
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Page({ error, reset }: ErrorProps) {

  useEffect(() => {
    
    const cleanup = ErrorScript({ error, reset }); 

    return () => { 
      if (typeof cleanup === 'function') { (cleanup as Function)(); }
    };
  });

  const cause = error.cause as { statusCode?: number } | undefined;

  const errorCode = cause?.statusCode || 500;
  const message = error.message || "An unexpected error has occurred.";

  return (
    <>
    <div className="error-layout">
      <h1 className="error-titulo">Error {errorCode}</h1>
      <p className="error-texto">{message}</p>
    </div>
    </>
  );
}