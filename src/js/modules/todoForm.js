const categoryList = (categories) =>{
  const list = Object.keys(categories);
  return list.reduce((out, category) =>`${out}<option value=${category}>${category}</option>`,'');
}



export const todoForm = (categories) => {
  return `
    <form class="todo_form">
      <label for="category">Select category</label>
      <select id="category" name="category"autofocus>
        ${categoryList(categories)}
      </select>

      <label for="name">Todo's name</label>
      <input id="name" name="name" type="text"/>

      <label for="content">Content</label>
      <textarea id="content" name="content" type="text"></textarea>

      <button>Send</button>
    </form>
  `
}
