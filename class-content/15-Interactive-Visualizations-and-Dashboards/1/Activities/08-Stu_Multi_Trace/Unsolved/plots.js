console.log(data);
// YOUR CODE HERE
var romanName = data.map(gods => gods.romanName);
var romanResults = data.map(gods => gods.romanSearchResults);
var greekName = data.map(gods => gods.greekName);
var greekResults = data.map(gods => gods.greekSearchResults)

var romanTrace = {
    x: romanName,
    y: romanResults,
    type: "bar"
};

var greekTrace = {
    x: greekName,
    y: greekResults,
    type: "bar"
};

var layout = {
    title: "Greek and Roman God Search Results",
    xaxis: {title: "Names"},
    yaxis: {title: "Search Results"}
};


var data = [romanTrace, greekTrace];

Plotly.newPlot("plot", data, layout);