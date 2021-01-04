var users = [
  user1 = {
  userName: 'Vlad',
  userLogin: 'Vvlad123',
  userPass: 'vlad123'
},
  user2 = {
  userName: 'Misha',
  userLogin: 'Mmisha123',
  userPass: 'misha123'
},
  user3 = {
  userName: 'Ivan',
  userLogin: 'Iivan123',
  userPass: 'ivan123'
}
];

let userFound = false
var login = prompt('Введите логин');
var password = prompt('Введите пароль');

for (var i = 0; i < users.length; i++ ){
  if ((users[i].userLogin === login) && (users[i].userPass === password)){
    let userFound = true
    alert('Добрый день ' + users[i].userName)
}
  if (!userFound) {
    alert('Ошибка авторизации!')
  }
}
