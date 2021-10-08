export const changeTodo = (e, modal, changeShowModal, category, name, content,) => {
  e.stopPropagation();
  e.preventDefault();
  console.log(category.value)
  console.log(name.value)
  console.log(content.value)
  changeShowModal(modal, 'remove');
}
