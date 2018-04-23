
export class Ajax {

  //static url: string;
  static method: 'GET'|'POST' = 'GET';
  static async: boolean = true;
  static noCache: boolean = false;

  // static call(url: string): Promise<string> {
    // return new Promise((resolve, reject) => {
    //
    //   let http = new XMLHttpRequest();
    //
    //   if(this.noCache) {
    //     url += '?cache=' + (new Date()).getTime();
    //   }
    //
    //   http.open(this.method, url, this.async);
    //   http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //   http.onreadystatechange = () => {
    //     if(http.readyState == 4) {
    //       if(http.status == 200) {
    //         console.log("xhr done successfully");
    //         resolve(http.responseText);
    //       } else {
    //         console.log("xhr failed");
    //         reject(http.status);
    //       }
    //     } else {
    //       console.log("xhr processing going on");
    //     }
    //   };
    //   http.send();
    // });
  // }

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
