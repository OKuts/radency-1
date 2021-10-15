export const searchTodo = (id, todos) => {
  for (let i = 0; i < todos.length; i++) {
    if (id === todos[i].id) {
      return i;
    }
  }
  return;
}
