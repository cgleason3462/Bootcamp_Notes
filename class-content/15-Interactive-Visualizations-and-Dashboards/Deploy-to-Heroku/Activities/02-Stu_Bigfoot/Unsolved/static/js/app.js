/* data route */
const url = "/data";

async function buildPlot() {
    // YOUR CODE HERE
    // fetch the data from your api
    // plot the results
    const trace = await d3.json(url);
    const layout = {
        title: "Big Foot Sightings"
    }
    Plotly.plot("plot", [trace], layout)
}

buildPlot();
