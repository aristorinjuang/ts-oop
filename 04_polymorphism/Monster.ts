import Animal from './Animal'

export default class Monster extends Animal {
  abilities: string[] = [];

  print() {
    console.log(this.name, 'is a monster!!!')
    console.log(this.name, 'has:')

    for (let ability of this.abilities) {
      console.log('-', ability)
    }
  }
}