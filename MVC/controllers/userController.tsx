import { UserService } from "../services/userService";
import { UserView } from "../views/userView";

export class UserController {

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

      console.error("Error en UserController:", error);
      
      return <p style={{ fontFamily: 'sans-serif' }}>Error al cargar los usuarios.</p>;
    }
  }
}
