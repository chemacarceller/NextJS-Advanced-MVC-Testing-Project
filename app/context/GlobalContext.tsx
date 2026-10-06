"use client";

import { createContext, useContext, useRef } from 'react';

const GlobalContext = createContext<string | null>(null);

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  
  const speechID = useRef<string>(crypto.randomUUID());

  return (
    <GlobalContext.Provider value={speechID.current}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() { return useContext(GlobalContext); }