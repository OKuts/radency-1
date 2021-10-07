import '../scss/main.scss';
import {showOpenTodo} from "./modules/showOpenTodo";
import {showStatistics} from "./modules/showStatistics";
import {categories, todos} from "../data/data";
import {modal, openTodosWrap, statisticsWrap} from "./modules/elements";
import {todoForm} from "./modules/todoForm";
import {closeModal} from "./modules/closeModal";
import {changeTodo} from "./modules/changeTodo";

const selectAction = (e) => {
  const action = e.target.dataset.id;
  console.log(e.target.dataset.id);
  console.log(e.currentTarget.dataset.key);
  if (action === 'edit') {
    modal.classList.add('active');
    modal.dataset.num = e.currentTarget.dataset.key;
  }
}

const [openTodosList, createBtn] = showOpenTodo(todos, categories, openTodosWrap);
openTodosList.forEach(item => item.addEventListener('click', selectAction));
createBtn.addEventListener('click', selectAction);

const selectionsList = showStatistics(todos, categories, statisticsWrap);
selectionsList.forEach(item => item.addEventListener('click', selectAction));

modal.insertAdjacentHTML('beforeend', todoForm(categories));
const editForm = document.querySelector('.todo_form')
editForm.addEventListener('click', e => e.stopPropagation());
editForm.querySelector('button').addEventListener('click', e =>
  changeTodo(e, editForm, modal, closeModal));

modal.addEventListener('click', () => closeModal(modal));
