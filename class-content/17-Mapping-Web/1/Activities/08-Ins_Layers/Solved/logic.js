// An array of cities and their locations
const cities = [
  {
    name: "Paris",
    location: [48.8566, 2.3522]
  },
  {
    name: "Lyon",
    location: [45.7640, 4.8357]
  },
  {
    name: "Cannes",
    location: [43.5528, 7.0174]
  },
  {
    name: "Nantes",
    location: [47.2184, -1.5536]
  }
];

// An array which will be used to store created cityMarkers
// map will make the array for you instead building an empty one and then appending it
const cityMarkers = cities.map(city => {
    return L.marker(city.location).bindPopup("<h1>" + city.name + "</h1>")
})

// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
const cityLayer = L.layerGroup(cityMarkers);

// Define variables for our tile layers
const light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
});

const dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
});

// Only one base layer can be shown at a time
const baseMaps = {
    Light: light,
    Dark: dark
};

// Overlays that may be toggled on or off
const overlayMaps = {
    Cities: cityLayer
};

// Create map object and set default layers
const myMap = L.map("map", {
    center: [46.2276, 2.2137],
    zoom: 6,
    layers: [light, cityLayer]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);
