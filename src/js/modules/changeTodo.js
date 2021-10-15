export const changeTodo = (e, modal, changeShowModal, { category, name, content }, todos, update, getMaxId) => {
  e.stopPropagation();
  e.preventDefault();
  const num = +modal.dataset.num;
  const todo = {
    id: num ? todos[num].id : getMaxId(todos) + 1,
    name: name.value,
    category: category.value,
    content: content.value,
  }
  if (!modal.dataset.num) {
    todos.push({
      ...todo,
      created: Date.now(),
      active: true,
    })
  } else {
    todos[num] = { ...todos[num], ...todo}
  }
  update();
  changeShowModal(modal, 'remove');
}
