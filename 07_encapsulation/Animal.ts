import Properties from './Properties'

export default class Animal implements Properties {
  private _name: string = '';
  private _feet: number = 0;
  private _hasPaws: boolean = false;

  constructor(name: string, feet: number, hasPaws: boolean) {
    this.name = name;
    this.feet = feet;
    this.hasPaws = hasPaws;
  }

  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set feet(feet: number) {
    this._feet = feet;
  }

  get feet() {
    return this._feet;
  }

  set hasPaws(hasPaws: boolean) {
    this._hasPaws = hasPaws;
  }

  get hasPaws() {
    return this._hasPaws;
  }

  print() {
    console.log(this.name, 'has', this.feet, 'feet.')

    if (this.hasPaws) {
      console.log(this.name, 'has paws.')
    }
  }
}