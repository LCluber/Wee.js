export declare class File {
    static load(path: string): Promise<string>;
    static removeTrailingSlash(path: string): string;
    static getName(path: string): string;
    static getExtension(path: string): string;
    static getDirectory(path: string): string;
    static checkExtension(extension: string, validExtensions: Array<string>): boolean;
}
