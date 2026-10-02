import { UserRepository } from "../repositories/userRepository";

export class UserService {

  private userRepository: UserRepository; 

  constructor() {
    this.userRepository = new UserRepository();
    this.getUsersForList = this.getUsersForList.bind(this);
  }

  async getUsersForList(activeUser=true) {

    try {

      // Request the data from the repository
      const users : any[] = await this.userRepository.findAll(activeUser) as any[];
      
      // Validations
      if (!users || users.length === 0) {
        throw new Error('There are no active registered users.');
      }
      
      // Once the promise is resolved, its data is returned.
      // Because the service function has the `async` keyword at the beginning, 
      // JavaScript automatically wraps the `return users` in a new promise.
      return users;
      
    } catch (error) {
        // Propagate the error so it is caught by the controller
        throw error;
    }
  }
}