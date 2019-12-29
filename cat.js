function Cat(name, age, weight) {
    this.name = name
    this.age = age
    this.weight = weight
}

Cat.prototype.eat = fish => {
    this.weight = this.weight + fish.weight
}