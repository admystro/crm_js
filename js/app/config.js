import { resultTable } from "./elements.js";
import { addUsers, getLocal } from "./utils.js";

// создаем массив для храения добавленных пользователей
export const addedUsers = getLocal('addedUsers') ?? [];

// выводим добавленных

addedUsers.forEach(item => {
  resultTable.innerHTML += addUsers(item.name, item.login)
});