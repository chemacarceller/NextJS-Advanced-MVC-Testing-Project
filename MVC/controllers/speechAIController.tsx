import { SpeechAIView } from "@/MVC/views/speechAIView";

export function SpeechAIController() {
  try {

    return <SpeechAIView title="Speech AI - My Testing Web Site" />;

  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(message); 
  }
}