// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.
function filterCity(city) {
    return parseInt(city.Increase_from_2016) > 15000;
}

// 2. Use filter() to pass the function as its argument
var filteredCities = top15Cities.filter(filterCity);

// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(filteredCities);

// 3. Use the map method with the arrow function to return all the filtered cities' names.
var cityname = filteredCities.map(cities => cities.City)

//  Check your filtered cities
console.log(cityname)

// 4. Use the map method with the arrow function to return all the filtered cities' populations.
var populations = filteredCities.map(cities => cities.population)

//  Check the populations of your filtered cities
console.log(populations)

// 5. Create your trace.
var trace = {
   x: cityname,
   y: populations,
   marker: {
       color: ['rgba(204,204,204,1)', 'rgba(222,45,38,0.8)', 'rgba(204,204,204,1)', 
       'rgba(204,204,204,1)', 'rgba(204,204,204,1)']
   },
   type: "bar"
};

// 6. Create the data array for our plot
var data = [trace];

// 7. Define our plot layout
var layout = {
   title: "City Populations",
   xaxis: {title: "City Name"},
   yaxis: {title: "Population"}
}

// 8. Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);