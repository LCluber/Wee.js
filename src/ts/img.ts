import { Logger, Group } from '@lcluber/mouettejs';
import { File } from './file';

export class Img {
  private static log : Group = Logger.addGroup('Wee');
  static load(path: string): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
      let img = new Image();
      img.src = path;
      img.name = File.getName(path);
      this.log.info('xhr processing starting ('+path+')');
      img.addEventListener('load', () => {
        this.log.info('xhr done successfully ('+path+')');
        resolve(img);
      });
      img.addEventListener('error', () => {
        this.log.error('xhr failed ('+path+')');
        reject(new Error('xhr failed ('+path+')'));
      });
    });
  }


}
