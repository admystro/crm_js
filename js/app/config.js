import { apiUrl, getData } from "./api/getData.js";
import { resultTable } from "./utils/elements.js";
import { addUsers } from "./utils/utils.js";


// создаем массив для храения добавленных пользователей
export const addedUsers = await getData(apiUrl.users)
console.log("addedUsers: ", addedUsers);

// чистим вывод
resultTable.innerHTML = ''

// выводим добавленных

addedUsers.forEach(item => {
  resultTable.innerHTML += addUsers(item)
});