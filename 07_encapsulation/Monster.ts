import Animal from './Animal'

export default class Monster extends Animal {
  private _abilities: string[] = [];

  constructor(name: string, feet: number, hasPaws: boolean, abilities: string[]) {
    super(name, feet, hasPaws);
    this.abilities = abilities;
  }

  protected set abilities(abilities: string[]) {
    this._abilities = abilities;
  }

  protected get abilities(): string[] {
    return this._abilities;
  }

  print() {
    console.log(this.name, 'is a monster!!!')
    console.log(this.name, 'has:')

    for (let ability of this.abilities) {
      console.log('-', ability)
    }
  }
}