"use client";

import '@/app/home.css';
import HomeScript from '@/app/home.js';
import { useEffect } from 'react';

export function HomeView({ title, message }: { title: string, message: string }) {

  useEffect(() => {
    
    const cleanup = HomeScript();

    return () => { 
      if (typeof cleanup === 'function') { (cleanup as Function)(); }
    };
  });
  

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <div className="home-layout">
        <div className="contenedor">
          <h1>{message}</h1>
          <p>This page is being dynamically rendered from the Next.js server.</p>
        </div>
      </div>
    </main>
  );
}
