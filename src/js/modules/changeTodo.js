import {todos} from "../../data/data";

export const changeTodo = (e, modal, changeShowModal, { category, name, content }, todos, update) => {
  e.stopPropagation();
  e.preventDefault();
  if (Number(modal.dataset.num) >= 0) {
    todos.push({
      name: name.value,
      created: Date.now(),
      category: category.value,
      content: content.value,
      dates: [],
      active: true,
    });
    console.log(todos)
    update();
  }
  changeShowModal(modal, 'remove');
}
