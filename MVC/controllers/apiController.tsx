import { UserService } from "../services/userService";

export class ApiController {

  private userService: UserService; 

  constructor() {
    this.userService = new UserService();
    this.listUsers = this.listUsers.bind(this);
  }

  async listUsers(activeUser = true) {
    
    try {
      const users = await this.userService.getUsersForList(activeUser);
      return Response.json({ success: true, data: users });

    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(message); 
    }
  }
}