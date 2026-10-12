"use client";

import { useEffect } from 'react';
import { GlobalProvider } from '@/app/context/GlobalContext';
import LayoutScript from './layout.js';

interface ClientAuxiliarProps {
  children: React.ReactNode;
}

export default function LayoutClientComponent({ children }: ClientAuxiliarProps) {

  useEffect(() => {
    
    const cleanup = (LayoutScript as any)();

    return () => { 
      if (typeof cleanup === 'function') { (cleanup as Function)(); }
    };
  }, []);

  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  );
}