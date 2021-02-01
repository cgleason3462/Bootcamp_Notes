var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

(async function(){
    const newtry = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000";
    const response = await d3.json(newtry);

    console.log(response);

    response.forEach(data => {
        const location = data.location
        if (location) {
            coord = [location.coordinates[1], location.coordinates[0]]
            return L.marker(coord).addTo(myMap);
        }
    })
})()

