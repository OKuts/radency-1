import '../scss/main.scss';
import {showOpenTodo} from "./modules/showOpenTodo";
import {showStatistics} from "./modules/showStatistics";
import {categories, todos} from "../data/data";
import {modal, openTodosWrap, statisticsWrap} from "./modules/elements";
import {getFormElements} from "./modules/getFormElements";
import {changeShowModal} from "./modules/changeShowModal";
import {changeTodo} from "./modules/changeTodo";

let [openTodosList, createBtn] = showOpenTodo(todos, categories, openTodosWrap);
const selectionsList = showStatistics(todos, categories, statisticsWrap);
const [editForm, category, name, content, formBtn ] = getFormElements(categories, modal);

console.log(category);
const selectAction = (e) => {
  const action = e.target.dataset.id;
  const num = +e.currentTarget.dataset.key;

  switch (action) {
    case 'delete':
      todos.splice(num, 1);
      [openTodosList, createBtn] = showOpenTodo(todos, categories, openTodosWrap);
      openTodosList.forEach(item => item.addEventListener('click', selectAction));
      createBtn.addEventListener('click', selectAction);
      break;

    case 'edit':
      changeShowModal(modal, 'add');
      modal.dataset.num = String(num);
      name.value = todos[num].name;
      category.value = todos[num].category;
      content.value = todos[num].content;
      break;

    case 'deleteAll':
      todos.splice(0, todos.length);
      [openTodosList, createBtn] = showOpenTodo(todos, categories, openTodosWrap);
      break;



  }
}

openTodosList.forEach(item => item.addEventListener('click', selectAction));
createBtn.addEventListener('click', selectAction);
selectionsList.forEach(item => item.addEventListener('click', selectAction));
modal.addEventListener('click', () => changeShowModal(modal, 'remove'));
editForm.addEventListener('click', e => e.stopPropagation());
formBtn.addEventListener('click', e =>
  changeTodo(e, modal, changeShowModal, category, name, content));


