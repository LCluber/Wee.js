
// var toto = Wee.File.load('assets/shaders/shader1.txt')
//                    .then(function (val) { console.log(val); })
//                    .catch(function (err) { console.log('error', err.message); });

// var exampleDiv = Wee.Dom.findById('exampleDiv');
// Wee.Dom.addHTMLElement(exampleDiv, 'p', {content: 'Ce paragraphe a été ajouté dynamiquement.', class: 'text-primary'});
var shaders = {
  test1 : 'test1',
  test2 : 'test2'
};
var select = Wee.Dom.findById("shaders");
for(var property in shaders ) {
  if(shaders.hasOwnProperty(property)) {
    //var opt = options[i];
    Wee.Dom.addHTMLElement( select,
                            'option',
                            { textContent:property,
                              value:property
                            });
  }
}

// var test = new Wee.Binding('test', 'value');
// test.update('value2');
