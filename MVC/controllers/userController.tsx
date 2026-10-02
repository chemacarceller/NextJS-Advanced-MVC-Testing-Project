import { UserService } from "../services/userService";
import { UserView } from "../views/userView";

export class UserController {

  private userService: UserService; 
  
  constructor() {
    this.userService = new UserService();
    this.listUsers = this.listUsers.bind(this);
  }

  async listUsers() {

    try {
      
      const users = await this.userService.getUsersForList();
      const plainUsers = JSON.parse(JSON.stringify(users));

      return <UserView usersList={plainUsers} title="User List" />;

    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(message); 
    }
  }
}
