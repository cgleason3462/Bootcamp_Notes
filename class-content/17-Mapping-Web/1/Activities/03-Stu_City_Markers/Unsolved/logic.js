// Create a map object
const myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

// Add a tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +"access_token=pk.eyJ1IjoiY2dsZWFzb24zNDYyIiwiYSI6ImNrZWFsNnp2cTAxbXczMHMxdmRrOGE2a2QifQ.Gfe4GHTUg9fIIbIBrbqUFg" +"T6YbdDixkOBWH_k9GbS8JQ", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);

// City markers
var NYmarker = L.marker([40.7128, -74.0060],{
  draggable: true,
  title: "New York",
}).addTo(myMap);

var CHmarker = L.marker([41.8781, -87.6298],{
  draggable: true,
  title: "Chicago",
}).addTo(myMap);

var HousMarker = L.marker([29.7604, -95.3698 ],{
  draggable: true,
  title: "Houston",
}).addTo(myMap);

var LAmarker = L.marker([34.0522, -118.223],{
  draggable: true,
  title: "LA",
}).addTo(myMap);

var OHmarker = L.marker([41.2565, 95.9345],{
  draggable: true,
  title: "Omaha",
}).addTo(myMap);


// Add code to ca marker for each city below and add it to the map

// newyork;
// chicago;
// houston;
// la;
// omaha;
