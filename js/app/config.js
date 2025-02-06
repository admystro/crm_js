import { resultTable } from "./utils/elements.js";
import { addUsers, getLocal } from "./utils/utils.js";

// создаем массив для храения добавленных пользователей
export const addedUsers = getLocal('addedUsers') ?? [];

// выводим добавленных

addedUsers.forEach(item => {
  resultTable.innerHTML += addUsers(item.name, item.login)
});