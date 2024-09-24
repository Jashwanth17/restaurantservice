class Token {
  constructor(value, expiresIn = 3600) {
      this.value = value;
      this.createdAt = new Date();
      this.expiresIn = expiresIn; 
  }

  isValid() {
      const currentTime = new Date();
      const expirationTime = new Date(this.createdAt.getTime() + this.expiresIn * 1000);
      return currentTime < expirationTime; 
  }
}

module.exports = Token;
