import { Logger } from '@lcluber/mouettejs';
import { File } from './file';

export class Img {

  static load(path: string): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
      let img = new Image();
      img.src = path;
      img.name = File.getName(path);
      Logger.info('xhr processing starting ('+path+')');
      img.addEventListener('load', () => {
        Logger.info('xhr done successfully ('+path+')');
        resolve(img);
      });
      img.addEventListener('error', () => {
        Logger.error('xhr failed ('+path+')');
        reject(new Error('xhr failed ('+path+')'));
      });
    });
  }


}
