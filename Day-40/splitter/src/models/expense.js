export class Expense {
  constructor(paidBy, amount, description="No description") {

    if(!paidBy || typeof paidBy !== "string") {
      throw new Error("PaidBy must be a non-empty string.")
    }

    if(!amount || typeof amount !== "number") {
      throw new Error("Amount must be a non-empty number.")
    }
 
    if(typeof description !== "string") {
      throw new Error("Description must be a string.")
    }
    this.paidBy = paidBy.trim();
    this.amount = parseFloat(amount.toFixed(2));
    this.description = description.trim();
    this.timestamp = new Date().toISOString();
    this.id = this.generateId();
    this.json = this.getJson();
  }

  generateId() {
    return crypto.randomUUID();
  }

  getJson() {
    return {
      id: this.id,
      paidBy: this.paidBy,
      amount: this.amount,
      description: this.description,
      timestamp: this.timestamp
    }
  }
}