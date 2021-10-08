export const showStatistics = (todos, categories, statisticsCont) => {
  const header = `
        <tr>
          <th>Note Category</th>
          <th>Active</th>
          <th>Archived</th>
        </th>
  `;

  const statisticsElements = Object.keys(categories).reduce((out, category) =>
    `${out} <tr class='statistic_item'>
          <td class='todo_name'><i class='${categories[category]} circle'></i>${category}</td>
          <td></td>
          <td></td>
        </tr>
    `, '');

  statisticsCont.innerHTML = `<table class='todo_table'>${header + statisticsElements}</table>`;

  return statisticsCont.querySelectorAll('.statistic_item');
};
