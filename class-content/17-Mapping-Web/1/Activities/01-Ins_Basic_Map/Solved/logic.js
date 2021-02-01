// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'

// L is leaflet
const myMap = L.map("map", {
    // define objects

    // Latitude and Longitude, builds map there
    center: [45.52, -122.67],
    zoom: 13
});

// Adding a tile layer (the background map image) to our map (tileLayer)
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    // Give object to pull data from
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    // how far the map is zoomed in when you run it
    maxZoom: 18,
    // Key in mapbox about what type of map we want
    id: "mapbox.streets",
    // use api key in config
    accessToken: API_KEY
// add the tilelayer to the map    
}).addTo(myMap);

// types of maps in slack

// Create a marker that is draggable at the coordinates
var marker = L.marker([45.5252, -122.67],{
    draggable: true,
    title: "My First Marker",
}).addTo(myMap);

marker.bindPopup("Hello There!");
 