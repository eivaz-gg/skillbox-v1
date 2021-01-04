function asd() {
    'use strict';
    let text = prompt('Введите JS: ')
    try {
      alert(text);
      window.eval(text);
    } catch (e) {
      console.log('Ошибка: ' + e);
    }
    }
asd();


function filterByType(type, ...args) {
   return args.filter(function(arg) {
   return typeof(arg) === type
 })
}
alert(filterByType( 'string', 10, 20, 'a', 'b', true, false));

filterByType();
