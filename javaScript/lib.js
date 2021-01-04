var start = (function() {
  var attempts = 9;
  var number = Math.floor(Math.random() * 1000) + 1;
  return function () {
    var n;
    while (!n)  n = prompt('Угадайте число');
    while (attempts > 0) {
      if (n==num){
        alert('Вы угадали');
        return;
      } do {
        n = prompt((num>n ? 'Больше' : 'Меньше') + '! Осталось попыток' + attempts);
      } while (!n);
      attempts--;
    }
    alert(n == num ? 'Вы угадали!' : 'Вы проиграли!');
    if (confirmation('Начать новую игру ?')){
      attempts = 9;
      num = Math.floor(Math.random() * 1000) + 1;
      start();
    }
  }
})();
