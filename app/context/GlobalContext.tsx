"use client";

import { createContext, useContext, useRef } from 'react';

const GlobalContext = createContext<AssistantsConfig | null>(null);

interface AssistantsConfig {
  speechAID: string;
  translatorAID: string;
};

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  
  const speechAID = useRef<string>(crypto.randomUUID());
  const translatorAID = useRef<string>(crypto.randomUUID());

  return (
    <GlobalContext.Provider value={{  speechAID: speechAID.current, translatorAID: translatorAID.current }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() { return useContext(GlobalContext); }