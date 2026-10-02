import { UserModel } from "../models/userModel";

// built-in data
const mockUsers = [
  { id: '1', name: 'Alice', email: 'alice@example.com', status: 'active', role: 'admin' },
  { id: '2', name: 'Bob', email: 'bob@example.com', status: 'active', role: 'user' },
  { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'inactive', role: 'user' },
  { id: '4', name: 'John', email: 'john@example.com', status: 'inactive', role: 'admin' },
  { id: '5', name: 'Joseph', email: 'joseph@example.com', status: 'inactive', role: 'user' }
];


export class UserRepository {

  constructor() {
    this.findById = this.findById.bind(this);
    this.findAll = this.findAll.bind(this);
  }

  async findById(id) {

    // Returns the data found by ID.
    return new Promise((resolve) => {

      setTimeout(() => {
        const u = mockUsers.find(u => u.id === id);
        resolve(u ? { ...new UserModel(u.id, u.name, u.email, u.status, u.role) } : null);
      }, 50);
    });
  }

  async findAll(activeUser = true) {
    
    // Returns all active records.
    return new Promise((resolve) => {
      setTimeout(() => {
        if (activeUser===true) {
          const activeUsers = mockUsers.filter(u => u.status === 'active')
            .map(u => new UserModel(u.id, u.name, u.email, u.status, u.role));

          resolve(activeUsers);
        } else {
          const inactiveUsers = mockUsers.filter(u => u.status === 'inactive')
            .map(u => new UserModel(u.id, u.name, u.email, u.status, u.role));
            
          resolve(inactiveUsers);
        }
      }, 50);
    });
  }
}