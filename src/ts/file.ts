import { HTTP } from '@lcluber/aiasjs';

export class File {

  static load(path: string): Promise<string> {
    return HTTP.get(path);
  }

  static removeTrailingSlash(path: string): string {
    return path.replace(/\/+$/, '');
  }

  static getName(path: string): string {
    return path.replace(/^.*[\\\/]/, '');
    //var filename = path.split('/').pop();
    //return filename.split('.').shift();
  }

  static getExtension(path: string): string {
    return path.split('.').pop();
  }

  static getDirectory(path: string): string {
    return path.replace(/[^\\\/]*$/, '');
  }

  static checkExtension(extension: string, validExtensions: Array<string>): boolean {
    for (let validExtension of validExtensions) {
      if( extension === validExtension ) {
        return true;
      }
    }
    return false;
  }


}
