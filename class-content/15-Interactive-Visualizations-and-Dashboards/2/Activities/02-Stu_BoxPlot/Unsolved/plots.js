// @TODO: YOUR CODE HERE
var trace1 = {
    // take the new york temps from the data sheet
    y: temps.newyork,
    name: "New York",
    type: "box",
    // boxpoints will include all of the data points to the sie of the plot 
    boxpoints: "all"
};

var trace2 = {
    y: temps.houston,
    name: "Houston",
    type: "box",
    boxpoints: "all"
};

var data = [trace1, trace2];

var layout = {
    title: "Box plot"
};

Plotly.newPlot("plot", data, layout);