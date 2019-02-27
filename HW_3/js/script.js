'use strick'

let logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
    let valid;
    if (login.length >= 4 && login.length <= 16) {
        return valid = true;
    } else {
        return valid = false;
    }
};

const isLoginUnique = function(allLogins, login) {
    let valid;
    if (allLogins.includes(login)) {
        console.log('такой логин есть');
        return valid = false;
    } else {
        console.log('такого логина нет');
        return valid = true;
    }
};

const addLogin = function(allLogins, login) {
    let validLength = isLoginValid(login);
    let validUnique;
    console.log('валидность длинны символов', validLength);
    const array = allLogins;
 
    if (validLength) {
        validUnique = isLoginUnique(allLogins, login);
    } else {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        return;
    }

    if (validUnique) {
        logins.push(login);
        alert('Логин успешно добавлен!');
        return;
    } else {
        alert('Такой логин уже используется!');
        return;
    }
};

const userlogin = prompt('Введите login от 4 до 16 символов');
if (userlogin !== null) {
    addLogin(logins, userlogin);
} else {
    alert('отменено пользователем');
}