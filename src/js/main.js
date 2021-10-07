import '../scss/main.scss';
import {showOpenTodo} from "./modules/showOpenTodo";
import {showStatistics} from "./modules/showStatistics";
import {categories, todos} from "../data/data";
import {modal, openTodosWrap, statisticsWrap} from "./modules/elements";
import {getFormElements} from "./modules/getFormElements";
import {closeModal} from "./modules/closeModal";
import {changeTodo} from "./modules/changeTodo";

const [openTodosList, createBtn] = showOpenTodo(todos, categories, openTodosWrap);
const selectionsList = showStatistics(todos, categories, statisticsWrap);
const [editForm, category, name, content, formBtn ] = getFormElements(categories, modal);

const selectAction = (e) => {
  const action = e.target.dataset.id;
  console.log(e.target.dataset.id);
  console.log(e.currentTarget.dataset.key);
  if (action === 'edit') {
    modal.classList.add('active');
    const num = e.currentTarget.dataset.key;
    modal.dataset.num = num;
    name.value = todos[num].name;
    category.value = todos[num].category;
    content.value = todos[num].content;
  }
}

openTodosList.forEach(item => item.addEventListener('click', selectAction));
createBtn.addEventListener('click', selectAction);
selectionsList.forEach(item => item.addEventListener('click', selectAction));
modal.addEventListener('click', () => closeModal(modal));
editForm.addEventListener('click', e => e.stopPropagation());
formBtn.addEventListener('click', e =>
  changeTodo(e, modal, closeModal, category, name, content));


