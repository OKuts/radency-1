import '../scss/main.scss';
import {showOpenTodo} from "./modules/showOpenTodo";

const selectAction = (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
}

const [openTodos, createBtn] = showOpenTodo();
openTodos.forEach(item => item.addEventListener('click', selectAction));
createBtn.addEventListener('click', selectAction);
