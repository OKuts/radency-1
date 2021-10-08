import {todos} from "../../data/data";

export const changeTodo = (e, modal, changeShowModal, { category, name, content }, todos, update) => {
  e.stopPropagation();
  e.preventDefault();
  todos.push({
    name: name.value,
    created: '',
    category: category.value,
    content: content.value,
    dates: Date.now(),
    active: true,
  });
  console.log(todos)
  update();
  changeShowModal(modal, 'remove');
}
