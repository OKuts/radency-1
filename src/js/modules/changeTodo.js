export const changeTodo = (e, form, modal, closeModal) => {
  e.stopPropagation();
  e.preventDefault();
  const category = form.querySelector('select').value;
  const name = form.querySelector('input').value;
  const content = form.querySelector('textarea').value;
  console.log(category)
  console.log(name)
  console.log(content)
  closeModal(modal);
}
