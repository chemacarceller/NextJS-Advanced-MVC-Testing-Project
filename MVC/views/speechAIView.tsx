"use client";

import '@/app/speechAI/speechAI.css';
import { SpeechAIScript } from '@/app/speechAI/speechAI.js';
import { useEffect } from 'react';
import Script from 'next/script';


export function SpeechAIView({ title }: { title: string }) {

  useEffect(() => {
    
    if (title) document.title = title;
    const cleanup = SpeechAIScript();

    return () => { 
      if (typeof cleanup === 'function') { (cleanup as Function)(); }
    };
  });

  return (
    <>      
      <h2>Speech to Text AI</h2>
      <p>Press the button to start speaking and fill in the text field</p>

      <div className="voice-container">
          <textarea id="texto-resultado" placeholder="Your dictated text will appear here..." rows={8} cols={128}></textarea>&nbsp;&nbsp;
          <button id="btn-microfono" className="btn-mic"><span id="estado-mic">Start Dictation</span></button>&nbsp;&nbsp;&nbsp;
          <button id="btn-send" class="btn-mic"><span id="estado-send">Send</span></button>
      </div>
      <h2>Text to Speech AI</h2>
      <p>Fill in the text field and listen to the result</p>

      <div className="voice-container">
          <textarea id="texto-resultado" placeholder="Fill in the text field here to hear the result..." rows={8} cols={128}></textarea>
      </div>
    </>
  );
}
