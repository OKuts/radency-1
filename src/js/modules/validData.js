const showValidError = (el, limit) => {
  el.value.length > limit
    ? el.previousElementSibling.firstElementChild.classList.add('noVisible')
    : el.previousElementSibling.firstElementChild.classList.remove('noVisible');
}

export const validData = (btn, name, content) => {
  if (name.value.length > 5 && content.value.length > 10) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', 'true');
  }
  showValidError(name, 5);
  showValidError(content, 10);
}
