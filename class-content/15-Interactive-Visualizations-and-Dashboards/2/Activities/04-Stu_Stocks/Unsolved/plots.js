var apiKey = "rYsVEExgsCsfmzbcyBgx";

/* global Plotly */
var url =
  `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=rYsVEExgsCsfmzbcyBgx`;

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */

 // Specific to json format, different api's might not be json
 // append to empty list rows
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
};

/**
 * Fetch data and build the timeseries plot
 */
function buildPlot() {
  // @TODO: YOUR CODE HERE
  d3.json(url).then(function(data){
  
  var name = data.dataset.name;
  var stock = data.dataset.dataset_code;
  
  console.log(unpack(data.dataset.data, 0));

  var trace1 = {
    name: "Basic Stock price points",
    x: unpack(data.dataset.data, 0),
    y: unpack(data.dataset.data, 4),
    type: "scatter",
    line: {color: 'green'}
  };

  var selectorOptions = {
    buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1m'
    }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6m'
 }],
}

  var data = [trace1];
  

  var layout = {
    title: "Basic Timeseries",
   // xaxis: {
     //       rangeslider: {}
       //   },
    yaxis: {
            rangeslider: {}},
  };

  Plotly.newPlot("plot", data, layout);
  
});
};
buildPlot();
