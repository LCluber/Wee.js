// var toto = Wee.File.load('assets/shaders/shader1.txt')
//                    .then(function (val) { console.log(val); })
//                    .catch(function (err) { console.log('error', err.message); });

// var exampleDiv = Wee.Dom.findById('exampleDiv');
// Wee.Dom.addHTMLElement(exampleDiv, 'p', {content: 'Ce paragraphe a été ajouté dynamiquement.', class: 'text-primary'});
var shaders = {
  test1: "test1",
  test2: "test2"
};
var select = Wee.Dom.findById("shaders");
for (var property in shaders) {
  if (shaders.hasOwnProperty(property)) {
    //var opt = options[i];
    Wee.Dom.addHTMLElement(select, "option", {
      textContent: property,
      value: property
    });
  }
}

// testElement = Wee.Dom.findById('test');
// console.log(testElement);
// var test = new Wee.Binding(testElement, 'class', 'toto');
// test.update('tata');
// //
// // testElement2 = Wee.Dom.findByClass('test2');
// // console.log('testElement2',testElement2);
// var test2 = new Wee.Binding(testElement, 'style.width', '20px');
// test2.update('40px');
//
// console.log(test);
// console.log(test2);

// testElement = Wee.Dom.findById('test');
// // console.log('testElement2',testElement2);
// var test = new Wee.Binding(testElement, '', '20px');
// // console.log(test2);
// test.update('40px');
//
// testElement2 = Wee.Dom.findByClass('test2');
// // console.log('testElement2',testElement2);
// var test2 = new Wee.Binding(testElement2 , '', '20px');
// // console.log(test2);
// test2.update('40px');
