
export class Check {

  static isJSON(str: any): Object|false {
    if (!this.isString(str)) {
      return false;
    }
    let json = str.replace(/(\r\n|\n|\r|\t)/gm, '');
    try {
      json = JSON.parse(str);
    } catch (e) {
      console.log(e);
      return false;
    }
    return json;
  }

  static isFunction(func: any): boolean {
    let getType = {};
    return func && getType.toString.call(func) === '[object Function]';
  }

  static isObject(object: any): boolean {
    return object !== null && typeof object === 'object';
  }

  static isASCII(code: string|number, extended: boolean): boolean {
    return (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(<string>code);
  }

  static isInteger(value: string|number): boolean {
    return value === parseInt(<string>value, 10);
  }
  
  static isString(str: any) {
    return typeof str === 'string';
  }

}
