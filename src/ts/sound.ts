
export class Sound {

  static load(path: string): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {
      let snd = new Audio();
      snd.src = path;
      //snd.name = String.getFileName(path);
      console.log('xhr processing starting ('+path+')');
      snd.addEventListener('canplaythrough', () => {
        console.log('xhr done successfully ('+path+')');
        resolve(snd);
      }, false);
      snd.addEventListener('canplay', () => {
        console.log('xhr done successfully ('+path+')');
        resolve(snd);
      }, false);
      snd.addEventListener('error', () => {
        console.log('error', 'xhr failed ('+path+')');
        reject(new Error('xhr failed ('+path+')'));
      }, false);
    });
  }


}
