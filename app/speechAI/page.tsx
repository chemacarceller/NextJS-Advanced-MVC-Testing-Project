import { SpeechAIController } from "@/MVC/controllers/speechAIController";

export default async function Page() {
  const view = await new SpeechAIController().start(); 
  return view;
}
