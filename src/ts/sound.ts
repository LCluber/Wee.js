import { Logger } from '@lcluber/mouettejs';

export class Sound {

  static load(path: string): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
      let snd = new Audio();
      snd.src = path;
      //snd.name = String.getFileName(path);
      Logger.info('xhr processing starting ('+path+')');
      snd.addEventListener('canplaythrough', () => {
        Logger.info('xhr done successfully ('+path+')');
        resolve(snd);
      }, false);
      snd.addEventListener('canplay', () => {
        Logger.info('xhr done successfully ('+path+')');
        resolve(snd);
      }, false);
      snd.addEventListener('error', () => {
        Logger.error('xhr failed ('+path+')');
        reject(new Error('xhr failed ('+path+')'));
      }, false);
    });
  }


}
