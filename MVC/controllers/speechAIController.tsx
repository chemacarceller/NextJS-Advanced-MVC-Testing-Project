import { SpeechAIView } from "../views/speechAIView";

export class SpeechAIController {

  constructor() {
    this.start = this.start.bind(this);
  }

  async start() {

    try {

      return <SpeechAIView title="Speech AI - My Testing Web Site" />;

    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(message); 
    }
  }
}
