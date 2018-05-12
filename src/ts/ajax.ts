//import {Promise} from 'es6-promise'
//import * as Rx from 'rxjs/Rx'
// import {Observable} from 'rxjs';
// import {ajax, AjaxResponse} from 'rxjs/ajax';


export class Ajax {

  //static url: string;
  static method: 'GET'|'POST' = 'GET';
  static async: boolean = true;
  static noCache: boolean = false;

//   static call(url: string): Observable<AjaxResponse> {
//     return ajax({
//   url: 'https://httpbin.org/post',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'x-rxjs-is': 'Awesome!'
//   },
//   body: {
//     hello: 'World!',
//   }
// }).map(e => e.response);
//   }

  static call(url: string): Promise<string> {
    return new Promise((resolve: Function, reject: Function) => {

      let http = new XMLHttpRequest();

      if(this.noCache) {
        url += '?cache=' + (new Date()).getTime();
      }

      http.open(this.method, url, this.async);
      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      http.onreadystatechange = () => {
        if(http.readyState == 4) {
          if(http.status == 200) {
            console.log('xhr done successfully ('+url+')');
            resolve(http.responseText);
          } else {
            console.log('error', 'xhr failed ('+url+')');
            reject(http.status);
          }
        }
      };
      console.log('xhr processing starting ('+url+')');
      http.send();
    });
  }

}



// var xhr = new XMLHttpRequest();
//       xhr.open(methodType, url, true);
//       xhr.send();
//       xhr.onreadystatechange = function(){
//       if (xhr.readyState === 4){
//          if (xhr.status === 200){
//             console.log("xhr done successfully");
//             var resp = xhr.responseText;
//             var respJson = JSON.parse(resp);
//             resolve(respJson);
//          } else {
//             reject(xhr.status);
//             console.log("xhr failed");
//          }
//       } else {
//          console.log("xhr processing going on");
//       }
