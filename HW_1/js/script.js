"use strict"
  
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let userPassword;
let userLogin;

userLogin = prompt('Проосьба ввести логин');
if (userLogin === adminLogin) {
    userPassword = prompt('Просьба ввести пароль');
    if (userPassword === adminPassword) {
        alert('Добро пожаловать!')
    } else if (userPassword === null) {
        alert('Отменено пользователем');
    } else if (userPassword !== adminPassword) {
        alert('Неверный пароль !')
    }
} else if (userLogin === null) {
    alert('Отменено пользователем');
} else if (userLogin !== adminLogin) {
    alert('Неверный логин')
}
// При загрузке страницы у посетителя запрашивается логин через prompt:
  
//     - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
//     - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
//        показывать alert с текстом 'Доступ запрещен, неверный логин!'   
//     - Если был введен логин совпадающий со значением константы adminLogin, 
//       спрашивать пароль через prompt.
    
//   При вводе пароля:
  
//       - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
//       - Если введен пароль который не совпадает со значением константы adminPassword,
//         показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
//       - Если введён пароль который совпадает со значением константы adminPassword, 
//         показывать alert с текстом 'Добро пожаловать!'
        
//   🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
// */

// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';