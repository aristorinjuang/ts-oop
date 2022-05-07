import Properties from './Properties'

export default class Animal implements Properties {
  name: string = '';
  feet: number = 0;
  hasPaws: boolean = false;

  constructor(name: string, feet: number, hasPaws: boolean) {
    this.name = name;
    this.feet = feet;
    this.hasPaws = hasPaws;
  }

  print() {
    console.log(this.name, 'has', this.feet, 'feet.')

    if (this.hasPaws) {
      console.log(this.name, 'has paws.')
    }
  }
}