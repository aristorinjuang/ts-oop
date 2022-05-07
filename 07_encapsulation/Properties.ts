export default interface Properties {
  set name(name: string);
  get name(): string;
  set feet(feet: number);
  get feet(): number;
  set hasPaws(hasPaws: boolean);
  get hasPaws(): boolean;
  print(): void;
}