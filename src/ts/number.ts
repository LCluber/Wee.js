
export class Number {

  static isInteger(value: string|number): boolean {
    return (value === parseInt(<string>value, 10));
  }

}
