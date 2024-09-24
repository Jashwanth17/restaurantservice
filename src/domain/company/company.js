class Restaurant {
  constructor(name, location, cuisine) {
      this.name = name;
      this.location = location;
      this.cuisine = cuisine;
  }

  displayInfo() {
      return `${this.name}, located at ${this.location}, serves ${this.cuisine} cuisine.`;
  }
}

module.exports = Restaurant;
