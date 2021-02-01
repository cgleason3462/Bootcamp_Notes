// Select the text of an HTML element
// to select something by class, you start with "." and then the name of the class
var text1 = d3.select(".text1").text()
console.log("text1 says: ", text1)

//to select text by an ID, you use "#"
var text2 = d3.select("#text2").text()
console.log("text2 says: ", text1)

// Modify element in HTML
d3.select(".text1").text("Hey I changed this");


var myLink = d3.select(".my-link").html();



