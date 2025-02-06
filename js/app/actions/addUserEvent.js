import { addedUsers } from "../config.js"
import { greenAlert, redAlert, resultTable, userLogin, userName, userPassword } from "../elements.js"
import { addUsers, saveLocal } from "../utils.js"

export function addUserEvent() {
  // создаем объект
  const newUser = {
    name: userName.value,
    login: userLogin.value,
    password: userPassword.value,
  }


  // проверям заполнены ли поля
  if (userName.value && userLogin.value && userPassword.value) {


    // проверяем есть ли такой логин или имя
    const checkName = addedUsers.some(item => item.name == userName.value)
    const checkLogin = addedUsers.some(item => item.login == userLogin.value)
    if (!checkName && !checkLogin) {

      // чистим инпуты
      userName.value = ''
      userLogin.value = ''
      userPassword.value = ''
      // пушим объект в массив
      addedUsers.push(newUser)

      // чистим вывод
      resultTable.innerHTML = ''

      // выводим в таблице при помощи хелпера
      // resultTable.innerHTML += addUsers(newUser.name, newUser.login)
      addedUsers.forEach(item => {
        resultTable.innerHTML += addUsers(item.name, item.login)
      });

      saveLocal('addedUsers', addedUsers)

      // алерт успех
      greenAlert.classList.remove('d-none')
      greenAlert.textContent = 'Менеджер доабвлен!'
      setTimeout(() => {
        greenAlert.classList.add('d-none')
      }, 3000);

    } else if (checkName) {
      redAlert.classList.remove('d-none')
      redAlert.textContent = 'Такое имя уже есть!'
      setTimeout(() => {
        redAlert.classList.add('d-none')
      }, 3000);
    } else if (checkLogin) {
      redAlert.classList.remove('d-none')
      redAlert.textContent = 'Такой логин уже есть!'
      setTimeout(() => {
        redAlert.classList.add('d-none')
      }, 3000);
    }

  } else {
    // алерт если не заполнены все поля
    redAlert.classList.remove('d-none')
    redAlert.textContent = 'Заполните все поля!'
    setTimeout(() => {
      redAlert.classList.add('d-none')
    }, 3000);
  }






}