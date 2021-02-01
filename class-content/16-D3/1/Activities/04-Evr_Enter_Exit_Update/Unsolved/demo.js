var austinTemps = [76, 59, 59, 73, 71];

// 
d3.select("#content").selectAll(".temps")
    // Bind data
    .data(austinTemps)
    .enter()
    .append("div")
    // Makes the new bars the same color and format
    .classed("temps", true)
    // changes style that we have in html
    // funtion that returns data number plus the size it was originally
    .style("height", function(d){
        return d + "px";
    });


    // 1 hour into video day 1 