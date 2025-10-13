import { User } from "../models/user";

export class UserService {
  constructor() {
    this.users = new Map();
  }

  addUser(name) {
    if(!name) {
      throw new Error("User name is required!");
    }

    const trimmedName = name.trim();

    if(this.users.has(trimmedName)) {
      throw new Error("User already exist!");
    }

    const user = new User(trimmedName);
    this.users.set(trimmedName, user);
    return user;
  }

  getUser(name) {
    return this.users.get(name);
  }

  getAllUsers() {
    return Array.from(this.users.values());
  }

  getAllUserNames() {
    return Array.from(this.users.keys());
  }

  hasUser(name) {
    return this.users.has(name);
  }

  getUserCount() {
    return this.users.size;
  }

  clear() {
    this.users.clear();
  }
}