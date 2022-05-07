export default class Animal {
  name: string = '';
  feet: number = 0;
  hasPaws: boolean = false;

  print() {
    console.log(this.name, 'has', this.feet, 'feet.')

    if (this.hasPaws) {
      console.log(this.name, 'has paws.')
    }
  }
}