import IAgent from '../../src/agents/iAgent.js';
import SpeechAgent from '../../src/agents/speechAgent.js';

export function SpeechAIScript(speechAID, inputMessage, outputResponse, btnSend, btnVoice, SpeechRecognition) {

      console.log(" speechAI.js ==>  speech ID = " + speechAID);

      const iAgent = new IAgent();
      const speechAgent = new SpeechAgent(SpeechRecognition);        
      const eventoInput = new Event('input', { bubbles: true });
      let lastReadPosition = 0;
      let timeoutKeydown;

      const handleSendClick = async () => {

            outputResponse.value = '';
            outputResponse.dispatchEvent(eventoInput);

            const message = inputMessage.value.trim();
  
            if (message === "") {
                  inputMessage.placeholder = "Please write a message before sending.";
                  return;
            }
  
            outputResponse.value = await iAgent.sendMessageToChat(sessionStorage.getItem('speechAID'), message, inputMessage, btnSend, outputResponse);
            outputResponse.value += " ";
            outputResponse.dispatchEvent(eventoInput);
      };

      const handleOutputInput = (e) => {
            const fullText = outputResponse.value;

            lastReadPosition = fullText.length > lastReadPosition ? lastReadPosition : fullText.length;

            if (fullText.length < lastReadPosition) {
                  lastReadPosition = fullText.length;
                  return;
            }

            // Detects whether the last entered character is a read trigger (space, period, comma, line break)
            const lastCharacter = fullText.slice(-1);

            if ([' ', '.', ',', '\n'].includes(lastCharacter)) {
                  const newFragment = fullText.substring(lastReadPosition).trim();

                  if (newFragment.length > 0) speechAgent.speak(newFragment);

                  // Updates the pointer to track how far we have read
                  lastReadPosition = fullText.length;
            }
      };

      const handleOutputKeydown = (e) => {
            if (e.key === 'Backspace' || e.key === 'Delete') {
                  timeoutKeydown = setTimeout(() => { lastReadPosition = outputResponse.value.length; }, 10);
            }
      };

      const handleVoiceClick = () => {
            speechAgent.hear(inputMessage, btnVoice);
      };

      btnSend.addEventListener('click', handleSendClick);
      outputResponse.addEventListener('input', handleOutputInput);
      outputResponse.addEventListener('keydown', handleOutputKeydown);
      btnVoice.addEventListener('click', handleVoiceClick);

      iAgent.initializeAgent();

      return () => {
            btnSend.removeEventListener('click', handleSendClick);
            outputResponse.removeEventListener('input', handleOutputInput);
            outputResponse.removeEventListener('keydown', handleOutputKeydown);
            btnVoice.removeEventListener('click', handleVoiceClick);
      
            if (timeoutKeydown) clearTimeout(timeoutKeydown);
      
            speechAgent.destroy(); 
      };
}