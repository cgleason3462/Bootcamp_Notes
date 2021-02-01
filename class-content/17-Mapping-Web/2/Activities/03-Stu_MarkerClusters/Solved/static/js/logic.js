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
    //Add the dates in ISO format
    date = "$where=created_date between'2016-01-10T12:00:00' and '2017-01-01T14:00:00'",
    // complaint type
    complaint = "&complaint_type=Rodent",
    // Add a limit
    limit = "&$limit=10000";

// Assemble API query URL
const url = baseURL + date + complaint + limit;

// Grab the data with d3
(async function(){
    const response = await d3.json(url);
    const markers = L.markerClusterGroup();
    response.forEach(data => {
        const location = data.location;
        if (location){
            const coord = [location.coordinates[1], location.coordinates[0]]
            const descriptor = data.descriptor
            markers.addLayer(L.marker(coord).bindPopup(descriptor))
        }
    })
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
})()
