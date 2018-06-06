
// var toto = WEE.Ajax.call('assets/shaders/shader1.txt')
//                    .then(function (val) { console.log(val); })
//                    .catch(function (err) { console.log('error', err.message); });

var exampleDiv = WEE.Dom.findById('exampleDiv');
WEE.Dom.addHTMLElement(exampleDiv, 'p', {content: 'Ce paragraphe a été ajouté dynamiquement.', class: 'text-primary'});
