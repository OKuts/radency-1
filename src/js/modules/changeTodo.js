import {todos} from "../../data/data";

export const changeTodo = (e, modal, changeShowModal, { category, name, content }, todos, update) => {
  e.stopPropagation();
  e.preventDefault();
  const num = +modal.dataset.num;
  const todo = {
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
