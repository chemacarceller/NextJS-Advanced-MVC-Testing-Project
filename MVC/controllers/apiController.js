import { UserService } from "../services/userService";

export class ApiController {

  constructor() {
    this.userService = new UserService();
    this.listUsers = this.listUsers.bind(this);
  }

  async listUsers(activeUser = true) {
    
    try {
      const users = await this.userService.getUsersForList(activeUser);
      return Response.json({ success: true, data: users });

    } catch (error) {
      console.error("Error en ApiController:", error);
    }
  }
}