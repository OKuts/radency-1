import {openTodos} from "./elements";
import {todos} from "../../data/data";

const getTodos = () => todos.reduce((out, todo, i) =>
    `${out} <tr>
          <td class='todo_name'><i class='${todo.dates} circle'></i>${todo.name}</td>
          <td>${todo.name}</td>
          <td>${todo.name}</td>
          <td>${todo.category}</td>
          <td>${todo.content}</td>
          <td class='icons'>
            <i class="fas fa-pen click_icons"></i>
            <i class="far fa-file-archive click_icons"></i>
            <i class="far fa-trash-alt click_icons"></i>
          </td>
        </tr>
    `, '');


export const showOpenTodo = () => {
  const header = `
        <tr>
          <th>icon</th>
          <th>name</th>
          <th>created</th>
          <th>category</th>
          <th>tent</th>
          <th>
            <i class="far fa-file-archive click_icons"></i>
            <i class="far fa-trash-alt click_icons"></i>
          </th>
        </th>
  `;
  openTodos.innerHTML = `<table class='todo_table'>${header + getTodos()}</table>`;
  openTodos.insertAdjacentHTML('beforeend','<button>Create note</button>');
  return [openTodos.querySelectorAll('tr'), openTodos.querySelector('button')];
}
