"use client";

import '@/app/speechAI/speechAI.css';
import { SpeechAIScript } from '@/app/speechAI/speechAI.js';
import { useEffect, useRef } from 'react';
import { useGlobalContext } from '@/app/context/GlobalContext';

export function SpeechAIView({ title }: { title: string }) {
  
  const context = useGlobalContext(); 
  const speechAID = context?.speechAID;

  const inputMessageRef = useRef<HTMLTextAreaElement>(null);
  const outputResponseRef = useRef<HTMLTextAreaElement>(null);
  const btnSendRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    
    if (title) document.title = title;

    const cleanup = SpeechAIScript(speechAID, inputMessageRef.current, outputResponseRef.current, btnSendRef.current);

    return () => { 
      if (typeof cleanup === 'function') { (cleanup as Function)(); }
    };
  }, [title, speechAID]); 

  return (
    <>      
      <h2>Speech to Text AI</h2>
      <p>Press the button to start speaking and fill in the text field</p>

      <div className="voice-container">
          <textarea ref={inputMessageRef} placeholder="Your dictated text will appear here..." rows={8} cols={128}></textarea>&nbsp;&nbsp;
          <button id="btn-microfono" className="btn-mic"><span id="estado-mic">Start Dictation</span></button>&nbsp;&nbsp;&nbsp;
          <button ref={btnSendRef} className="btn-mic"><span id="estado-send">Send</span></button>
      </div>
      <h2>Text to Speech AI</h2>
      <p>Fill in the text field and listen to the result</p>

      <div className="voice-container">
          <textarea ref={outputResponseRef} placeholder="Fill in the text field here to hear the result..." rows={8} cols={128}></textarea>
      </div>
    </>
  );
}