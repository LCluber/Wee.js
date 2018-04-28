
export class String {

  static ucfirst(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);

    // str += '';
    // var f = str.charAt(0).toUpperCase();
    // return f + str.substr(1);

  }

  static toASCII(code: string): number {
    return code.charCodeAt(0);
  }


}
