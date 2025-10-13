export class User {
  constructor(name) {
    if(!name || typeof name !== "string") {
      throw new Error("User name must be a non-empty string.")
    }
    this.name = name.trim();
    this.id = this.generateId();
    this.json = this.getJson();
  }

  generateId() {
    return crypto.randomUUID();
  }

  getJson() {
    return {
      id: this.id,
      name: this.name
    }
  }

}