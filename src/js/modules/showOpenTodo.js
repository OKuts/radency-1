export const showOpenTodo = (todos, categories, openTodos) => {
  const header = `
        <tr <tr data-key='-1'>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th>
            <i data-id="archiveAll" class="far fa-file-archive click_icons"></i>
            <i data-id="deleteAll" class="far fa-trash-alt click_icons"></i>
          </th>
        </th>
  `;

  const todosElements = todos.reduce((out, todo, i) =>
    `${out} <tr data-key='${i}'>
          <td class='todo_name'><i class='${categories[todo.category]} circle'></i>${todo.name}</td>
          <td></td>
          <td>${todo.category}</td>
          <td>${todo.content}</td>
          <td></td>
          <td class='icons'>
            <i data-id="edit" class="fas fa-pen click_icons"></i>
            <i data-id="archive" class="far fa-file-archive click_icons"></i>
            <i data-id="delete" class="far fa-trash-alt click_icons"></i>
          </td>
        </tr>
    `, '');

  openTodos.innerHTML = `<table class='todo_table'>${header + todosElements}</table>`;
  openTodos.insertAdjacentHTML('beforeend','<button type="button" data-id="create">Create note</button>');

  return [openTodos.querySelectorAll('tr'), openTodos.querySelector('button')];
};
