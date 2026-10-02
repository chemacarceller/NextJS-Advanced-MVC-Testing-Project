import { SpeechAIController } from "@/MVC/controllers/speechAIController";

export default async function Page() {
  return await new SpeechAIController().start(); 
}
