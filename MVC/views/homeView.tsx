"use client";

import '@/app/home.css';
import HomeScript from '@/app/home.js';
import { useEffect } from 'react';

export function HomeView({ title, message }: { title: string, message: string }) {

  useEffect(() => {
    
    if (title) document.title = title;
    const cleanup = HomeScript();

    return () => { 
      if (typeof cleanup === 'function') { (cleanup as Function)(); }
    };
  });
  
  return (
    <>
      <h1>{message}</h1>
      <p>This page is being dynamically rendered from the Next.js server.</p>
    </>
  );
}
