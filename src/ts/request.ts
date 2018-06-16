// import { String }   from './string';
// import { File }     from './file';
// import { Img }      from './img';
// import { Sound }    from './sound';
// import * as MOUETTE from '../../bower_components/Mouettejs/dist/mouette';
// import * as TAIPAN  from '../../bower_components/Taipanjs/dist/taipan';
//
// export class Request {
//
//   fsm : TAIPAN.FSM;
//   request = {
//     String:String,
//     Img   :Img,
//     Sound :Sound
//   }
//
//   constructor() {
//     this.fsm = new TAIPAN.FSM([
//                   { name: 'send',    from: 'idle',    to: 'pending' },
//                   { name: 'success', from: 'pending', to: 'success' },
//                   { name: 'error',   from: 'pending', to: 'error'   }
//                 ]);
//     // this.request = {
//     //   String:String,
//     //   Img   :Img,
//     //   Sound :Sound
//     // };
//
//   }
//
//   public send(path: string, type: string): Promise<HTMLImageElement|HTMLAudioElement|string|false> {
//     //this.logs.add('send ' + this.file.getName() + ', Status ' + this.fsm.getStatus());
//     if (this.fsm['send']()) {
//       return this.request[String.ucfirst(type)].load(path).then(
//         (response:HTMLImageElement|HTMLAudioElement|string) => {
//           this.fsm['success']();
//           return response;
//         }
//       ).catch(
//         (err: Error) => {
//           //console.log('error', err.message);
//           MOUETTE.Logger.error(err.message);
//           this.fsm['error']();
//           return false;
//         }
//       );
//     }
//   }
//
// };
