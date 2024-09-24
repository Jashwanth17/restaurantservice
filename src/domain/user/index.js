
class User {
  constructor(username, password) {
      this.username = username;
      this.password = password; 
  }

  validatePassword(inputPassword) {
      return this.password === inputPassword; 
  }
}

module.exports = User;
