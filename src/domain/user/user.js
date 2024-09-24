class User {
  constructor(name, email) {
      this.name = name;
      this.email = email;
  }

  displayInfo() {
      return `${this.name} can be reached at ${this.email}.`;
  }
}

module.exports = User;
