
export class Ascii {
  
  static isASCII(code: string|number, extended: boolean): boolean {
    return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(<string>code);
  }
  
  static stringToASCII(code: string): number {
    return code.charCodeAt(0);
  }
  
  
}
