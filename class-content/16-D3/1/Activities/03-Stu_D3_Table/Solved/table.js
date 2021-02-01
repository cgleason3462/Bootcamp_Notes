var austinWeather = [{
  date: "2018-02-01",
  low: 51,
  high: 76
},
{
  date: "2018-02-02",
  low: 47,
  high: 59
},
{
  date: "2018-02-03",
  low: 44,
  high: 59
},
{
  date: "2018-02-04",
  low: 52,
  high: 73
},
{
  date: "2018-02-05",
  low: 47,
  high: 71
}
];

// Select the table body
d3.select("tbody")
  // Select all the table rows even though there arent any curently
  // We will be adding them
  .selectAll("tr")
  // Use the data from the dictionary above
  .data(austinWeather)
  // Start work from the end of the current rows
  .enter()
  // Add new rows to table
  .append("tr")
  // Add html to new table
  // Return the values from the dictionary above using a function
  // Fills each column in <td>
  .html(function(d) {
    return `<td>${d.date}</td><td>${d.low}</td><td>${d.high}</td>`;
  });
