export const initStatistics = (todos, categories) => {
  const outObj = {...categories};
  Object.keys(outObj).forEach(category => outObj[category] = {...categories[category]});
  todos.forEach(todo => {
    outObj[todo.category].total += 1;
    if (todo.active) outObj[todo.category].active += 1;
  })

  return outObj;
}
