import '../scss/main.scss';
import {showOpenTodo} from "./modules/showOpenTodo";
import {showStatistics} from "./modules/showStatistics";
import {categories, todos} from "../data/data";
import {modal, openTodosWrap, statisticsWrap} from "./modules/elements";
import {getFormElements} from "./modules/getFormElements";
import {changeShowModal} from "./modules/changeShowModal";
import {changeTodo} from "./modules/changeTodo";
import {initStatistics} from "./modules/initStatistics";
import {dateFormat} from "./modules/dateFormat";

const state = {
  activeOnly: true,
  elements: getFormElements(categories, modal),
};

let [openTodosList, createBtn] = showOpenTodo(todos, categories, openTodosWrap, dateFormat, state.activeOnly);
modal.addEventListener('click', () => changeShowModal(modal, 'remove'));
state.elements.editForm.addEventListener('click', e => e.stopPropagation());
state.elements.formBtn.addEventListener('click', e =>
  changeTodo(e, modal, changeShowModal, state.elements, todos, update));


const update = (archived = false) => {
  [openTodosList, createBtn] = showOpenTodo(todos, categories, openTodosWrap, dateFormat, state.activeOnly);
  state.statistics =  initStatistics(todos, categories);
  state.selectionsList = showStatistics(state.statistics, statisticsWrap);
  openTodosList.forEach(item => item.addEventListener('click', selectAction));
  createBtn.addEventListener('click', selectAction);
  modal.dataset.num = '';
}

const selectAction = (e) => {
  const action = e.target.dataset.id;
  let num = +e.currentTarget.dataset.key;
  switch (action) {
    case 'delete':
      todos.splice(num, 1);
      update();
      break;

    case 'edit':
      changeShowModal(modal, 'add');
      modal.dataset.num = String(num);
      state.elements.name.value = todos[num].name;
      state.elements.category.value = todos[num].category;
      state.elements.content.value = todos[num].content;
      break;

    case 'deleteAll':
      todos.splice(0, todos.length);
      update();
      break;

    case 'archive':
      todos[num].active = false;
      update();
      break;

    case 'showAll':
      state.activeOnly = !state.activeOnly;
      update(state.activeOnly);
      break;

    case 'create':
      changeShowModal(modal, 'add');
      break;

    case 'extract':
      todos[num].active = true;
      update();
      break;
  }
}

update();
