
var toto = WEE.Ajax.call('assets/shaders/shader1.txt')
                   .then(function (val) { console.log(val); })
                   .catch(function (err) { console.log('error', err.message); });
