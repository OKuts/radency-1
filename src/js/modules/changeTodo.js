export const changeTodo = (e, modal, closeModal, category, name, content,) => {
  e.stopPropagation();
  e.preventDefault();
  console.log(category.value)
  console.log(name.value)
  console.log(content.value)
  closeModal(modal);
}
