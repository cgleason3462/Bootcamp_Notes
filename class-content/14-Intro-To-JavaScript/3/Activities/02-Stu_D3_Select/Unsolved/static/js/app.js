// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var table1 = d3.select(".table")
console.log("table1 says: ", table1);
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped

// Use D3 to select the table body
var tbody = d3.select(".tbody")
// Append one table row `tr` to the table body
var tr1 = d3.append("tr")

// Append one cell for the student name
row.append("td").text(newGrade[0]);
// Append one cell for the student grade
row.append("td").text(newGrade[1]);