import { SpeechAIView } from "../views/speechAIView";

export class SpeechAIController {

  constructor() {
    this.start = this.start.bind(this);
  }

  async start() {

    try {

      return <SpeechAIView title="SpeechAI - My Testing Speech for AI" />;

    } catch (error) {

      console.error("Error in SpeechAIController:", error);
      throw new Error(error)
    }
  }
}
