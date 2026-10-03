import { HomeView } from "../views/homeView";

export class HomeController {

  constructor() {
    this.start = this.start.bind(this);
  }

  async start() {

    try {

      return <HomeView title="Home - My Testing Web Site" message="Welcome to my site!"/>;

    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(message); 
    }
  }
}