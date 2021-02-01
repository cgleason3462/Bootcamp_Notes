// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
const
    baseURL = "https://data.cityofnewyork.us/resource/fhrw-4uyv.json?",
    date = "$where=created_date between'2016-01-10T12:00:00' and '2017-01-01T14:00:00'",
    complaint = "&complaint_type=Rodent",
    limit = "&$limit=10000";

// Assemble API query URL
// ...

(async function(){
  	// Grab the data with d3
    // ...
    const markers = L.markerClusterGroup();
    response.forEach(data => {
		// Set the data location property to a variable
		// ...
		// Set the data descriptor property to a variable
		// ...
		// Check for location property
		if (location){
			// Add a new marker to the cluster group and bind a pop-up
			// ...
        }
    })
    // Add our marker cluster layer to the map
    // ...
})()
