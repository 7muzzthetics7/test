function Dog(name) {
    this.name = name
}

Dog.prototype.eat = function(bone) {
    this.name = this.name + ' full'
}