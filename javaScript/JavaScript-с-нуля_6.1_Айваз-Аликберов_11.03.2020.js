function User(firstName, lastName, regDate) {
    this.firstName = firstName, // имя
        this.lastName = lastName, // фамилия
        this.regDate = regDate // дата и время регистрации
}

function UserList() {
    // внутреннее свойство-массив, в которое будут попадать объекты типа User
    this.users = [],
        // метод получает в качестве параметра объект типа User и сохраняет его в массив users
        this.add = function(user) {
            this.users.push(user);
        },
        this.getAllUsers = function() {
            var arr = this.users;
            var text = '';
            for (var i = 0; i < arr.length; i++) {
                for (var j in arr[i]) {
                    text += arr[i][j]
                }
                text += "\n"
            }
            alert(text);
        }
}
let eUser
var twoObj = new UserList();
// цикл пока кнопка "отмена" НЕ нажата
while (eUser !== null) {
    eUser = prompt("Введите ваше Имя и Фамилию через пробел", "");
    if (eUser != null) {
        var nameUser = eUser.split(' ');
        if (nameUser[1] !== undefined) {
            var parameter1 = nameUser[0];
            var parameter2 = nameUser[1];
            var parameter3 = getDateNow();
            var newObject = new User(parameter1, parameter2, parameter3);

            twoObj.add(newObject);
        } else {
            alert("Между Имя и Фамилия должен быть пробел");
        }
    } else {
        twoObj.getAllUsers();
    }
}

// функция получения текущей даты и времени
function getDateNow() {
    var now = new Date();
    var date = now.getDate(); //получаем число месяца

    // получаем месяц
    var month = 'января, февраля, марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря'.split(',');
    var monthWord = month[now.getMonth()];
    var year = now.getFullYear(); //получаем год

    //получаем день недели
    var dayWeek = 'воскресенье, понедельник, вторник, среда, четверг, пятница, суббота'.split(',');
    var dayWeekWord = dayWeek[now.getDay()];

    //получаем часы, минуты, секунды
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    if (hour.length == 1) {

        hour = '0' + hour
    }

    if (minute.length == 1) {

        minute = '0' + minute

    }

    if (second.length == 1) {

        second = '0' + second
    }

    var regDate = 'Регистрация: ' + date + ' ' + monthWord + ' ' + year + ' года, ' + hour + ':' + minute + ':' + second;
    return regDate;
}