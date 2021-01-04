//var date = new Date();
//text = 'Сегодня ' + date.getFullYear() + ' год';
//text += ' ' + date.getMonth() + ' марта';
//text += ' ' + date.getDate() + ' среда';
//text += ' ' + date.getHours() + ' часов';
//text += ' ' + date.getMinutes() + ' минут';
//text += ' ' + date.getSeconds() + ' секунд';

//setInterval (alert(text),1000);

function getStringMinute(count) {
   var n = Math.abs(count) % 100; // берем число и сбрасываем сотни
   var unit = count % 10; // сбрасываем десятки и записываем в новую переменную
    if (n > 10 && n < 20) { return count + ' минут'; } // Пример 11 минут, 15 минут
     if (unit > 1 && unit < 5) { return count + ' минуты'; } // Пример 22  33 минуты
     if (unit === 1) { return count + ' минута'; } //  Пример 1 минута 31 минута
    return count + ' минут';
 }

  function getStringSecond(count) {
     var n = Math.abs(count) % 100;
     var unit = count % 10;
      if (n > 10 && n < 20) { return count + ' секунд'; }
       if (unit > 1 && unit < 5) { return count + ' секунды'; }
        if (unit === 1) { return count + ' секунда'; }
      return count + ' секунд';
   }

   function getStringHour(count) {
      var n = Math.abs(count) % 100;
      var unit = count % 10;
       if (n >= 5 && n <= 20) { return count + ' часов'; }
        if (unit > 1 && unit < 5) { return count + ' часа'; }
         if (unit === 1) { return count + ' час'; }
         if (unit === 0 ) {return 0 + ' часов'}
       return count + ' час';
    }

    for (let i=0;i<=23;i++){
    console.log(getStringHour(i));
}
