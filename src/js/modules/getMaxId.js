export const getMaxId = (todos) => {
  let maxId = 1;
  todos.forEach(todo => { if (todo.id > maxId) maxId = todo.id });
  return maxId;
}
