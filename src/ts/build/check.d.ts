export declare class Check {
    static isJSON(str: string): any;
    static isFunction(func: Function): boolean;
    static isObject(object: Function): boolean;
    static isASCII(code: string | number, extended: boolean): boolean;
    static isInteger(value: string | number): boolean;
}
