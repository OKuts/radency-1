export const showOpenTodo = (todos, categories, openTodos, dateFormat, activeOnly) => {
  const extractDates = (content) => {
    const arr = Array.from(content.matchAll(/(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}/gm));
    return arr.map(item => item[0]).join(', ');
  }

  const header = `
        <tr <tr data-key='-1'>
          <th></th>
          <th>Name</th>
          <th>Created</th>
          <th>Category</th>
          <th>Content</th>
          <th>Dates</th>
          <th style='text-align: right'>
            <i data-id="showAll" class="fas fa-tasks click_icons"></i>
            <i data-id="deleteAll" class="far fa-trash-alt click_icons"></i>
          </th>
        </th>
  `;

  const getIcons = (flag) => {
    return flag
      ? `<i data-id="edit" class="fas fa-pen click_icons"></i>
         <i data-id="archive" class="far fa-file-archive click_icons"></i>
         <i data-id="delete" class="far fa-trash-alt click_icons"></i>`
      : '<i data-id="extract" class="fas fa-upload click_icons"></i>'
  }

  const todosElements = todos.reduce((out, todo, i) =>
    todo.active || !activeOnly
      ? `${out} <tr data-key='${i}'>
          <td><i class='${categories[todo.category].icon} circle'></i></td>
          <td class='todo_name'>${todo.name}</td>
          <td>${dateFormat(todo.created)}</td>
          <td>${todo.category}</td>
          <td>${todo.content}</td>
          <td>${extractDates(todo.content)}</td>
          <td class='icons'>
          ${getIcons(todo.active)}
          </td>
        </tr>
    `
    : out
    , '');

  openTodos.innerHTML = `<table class='todo_table'>${header + todosElements}</table>`;
  openTodos.insertAdjacentHTML('beforeend','<button type="button" data-id="create">Create note</button>');

  return [openTodos.querySelectorAll('tr'), openTodos.querySelector('button')];
};
