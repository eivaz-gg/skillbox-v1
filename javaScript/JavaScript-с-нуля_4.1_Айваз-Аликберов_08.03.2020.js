function getStringMinute(count) {
    var n = Math.abs(count) % 100; // берем число и сбрасываем сотни
    var unit = count % 10; // сбрасываем десятки и записываем в новую переменную
    if (n > 10 && n < 20) {
        return count + ' минут';
    } // Пример 11 минут, 15 минут
    if (unit > 1 && unit < 5) {
        return count + ' минуты';
    } // Пример 22  33 минуты
    if (unit === 1) {
        return count + ' минута';
    } //  Пример 1 минута 31 минута
    return count + ' минут';
}

function getStringSecond(count) {
    var n = Math.abs(count) % 100;
    var unit = count % 10;
    if (n > 10 && n < 20) {
        return count + ' секунд';
    }
    if (unit > 1 && unit < 5) {
        return count + ' секунды';
    }
    if (unit === 1) {
        return count + ' секунда';
    }
    return count + ' секунд';
}

function getStringHour(count) {
    var n = Math.abs(count) % 100;
    var unit = count % 10;
    if (n >= 5 && n <= 20) {
        return count + ' часов';
    }
    if (unit > 1 && unit < 5) {
        return count + ' часа';
    }
    if (unit === 1) {
        return count + ' час';
    }
    return count + ' часов';
}

function getStringMonth(time) {
    let arrayMonth = ['Января', 'Февраля', 'Марта', ' Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return time.getMonth() + ' ' + arrayMonth[time.getMonth()];
}

function getStringYear(time) {
    return time.getFullYear() + ' года';
}

function getStringDay(time) {
    let arrayWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return arrayWeek[time.getDay()];
}

let now = new Date();

function getFullDate(time) {
    return 'Сегодня ' + getStringMonth(time) + ' ' + getStringYear(time) + ', ' + getStringDay(time) + ', ' + getStringHour(time.getHours()) + ' ' + getStringMinute(time.getMinutes())  + ' ' + getStringSecond(time.getSeconds())
}
setInterval(() => {
    let now = new Date();
    console.log(getFullDate(now))
}, 1000)
