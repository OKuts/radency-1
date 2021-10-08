export const showStatistics = (categories, statisticsCont) => {
  const header = `
        <tr>
          <th></th>
          <th>Note Category</th>
          <th>Active</th>
          <th>Archived</th>
        </th>
  `;

  const statisticsElements = Object.keys(categories).reduce((out, category) =>
    categories[category].total > 0
      ? `${out} <tr class='statistic_item'>
            <td><i class='${categories[category].icon} circle'></i></td>
            <td class='todo_name'>${category}</td>
            <td>${categories[category].active}</td>
            <td>${categories[category].total - categories[category].active}</td>
          </tr>
      `
      : out
    , '');
  statisticsCont.innerHTML = `<table class='todo_table'>${header + statisticsElements}</table>`;

  return statisticsCont.querySelectorAll('.statistic_item');
};
