
export class Check {

  static isJSON(str: string): any {
    let json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
    try {
      json = JSON.parse(str);
    } catch (e) {
      return e;
    }
    return json;
  }

  static isFunction(func: Function): boolean {
    let getType = {};
    return func && getType.toString.call(func) === '[object Function]';
  }

  static isObject(object: Function): boolean {
    return ( object !== null && ( this.isFunction(object) || typeof object === 'object' ) );
  }

  static isASCII(code: string|number, extended: boolean): boolean {
    return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(<string>code);
  }

  static isInteger(value: string|number): boolean {
    return (value === parseInt(<string>value, 10));
  }

}
