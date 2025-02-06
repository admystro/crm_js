// создаем локальное хранилище
export function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}
// получаем локальное хранилище

export function getLocal(key) {
  return JSON.parse(localStorage.getItem(key))
}

// функция хелпер для вывода
export function addUsers(name, login) {
  const yes = `<tr><td>${name}</td><td>${login}</td><td>2025-11-11 14:25</td></tr>`
  return (name, login) ? yes : ''
}