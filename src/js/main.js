import '../scss/main.scss';
import {showOpenTodo} from "./modules/showOpenTodo";
import {showStatistics} from "./modules/showStatistics";
import {categories, todos} from "../data/data";
import {modal, openTodosWrap, statisticsWrap} from "./modules/elements";
import {getFormElements} from "./modules/getFormElements";
import {changeShowModal} from "./modules/changeShowModal";
import {changeTodo} from "./modules/changeTodo";
import {initStatistics} from "./modules/initStatistics";

let [openTodosList, createBtn] = showOpenTodo(todos, categories, openTodosWrap);
let statistics =  initStatistics(todos, categories);
let selectionsList = showStatistics(statistics, statisticsWrap);
const [editForm, category, name, content, formBtn ] = getFormElements(categories, modal);

const selectAction = (e) => {
  const action = e.target.dataset.id;
  const num = +e.currentTarget.dataset.key;
  console.log(action)
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

    case 'archive':
      todos[num].active = false;
      [openTodosList, createBtn] = showOpenTodo(todos, categories, openTodosWrap);
      statistics =  initStatistics(todos, categories);
      selectionsList = showStatistics(statistics, statisticsWrap);
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


