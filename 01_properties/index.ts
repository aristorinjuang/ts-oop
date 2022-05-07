import Animal from './Animal'

let cat: Animal = new Animal()

cat.name = 'Cat'
cat.feet = 4

let dog: Animal = new Animal()

dog.name = 'Dog'
dog.feet = 4
dog.hasPaws = true

console.log(cat)
console.log(dog)