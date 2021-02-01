function createChoropleth(geojsonData){
    // Create a new choropleth layer
    geojson = L.choropleth(geojsonData, {

        // Define what  property in the features to use
        valueProperty : "MHI2016",

        // Set color scale
        scale : ["#ffffb2", "#b10026"],

        // Number of breaks in step range
        steps : 5,

        // q for quartile, e for equidistant, k for k-means
        mode : "q",

        style: {
            // Border color
            color : "fff",
            weight: 1,
            fillOpacity: 0.8
        },

        // Binding a pop-up to each layer
        onEachFeature: function(feature, layer) {
            const popupMsg = "Zip Code: " + feature.properties.ZIP + "<br>Median Household Income:<br>" +"$" + feature.properties.MHI2016;
            layer.bindPopup(popupMsg)
        }
    })
    createMap(geojson)
}

function createLegend(geojson){
    // Set up the legend
    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
        var limits = geojson.options.limits;
        var colors = geojson.options.colors;
        var labels = [];

        // Add min & max
        var legendInfo = "<h1>Median Income</h1>" +
            "<div class=\"labels\">" +
            "<div class=\"min\">" + limits[0] + "</div>" +
            "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
            "</div>";

        div.innerHTML = legendInfo;

        limits.forEach(function(limit, index) {
            labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        });

        div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        return div;
    };
    return legend;
}

function createMap(geojson){
    // Creating map object
    var myMap = L.map("map", {
        center: [34.0522, -118.2437],
        zoom: 8
    });

    // Adding tile layer
    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken: API_KEY
    }).addTo(myMap);

    // Add geojson
    geojson.addTo(myMap);

    // Add legend to map
    const legend = createLegend(geojson)
    legend.addTo(myMap);
}

(async function(){
    var geoData = "static/data/Median_Household_Income_2016.geojson";
    // Grab data with d3
    const geojsonData = await d3.json(geoData);
    createChoropleth(geojsonData)
})()