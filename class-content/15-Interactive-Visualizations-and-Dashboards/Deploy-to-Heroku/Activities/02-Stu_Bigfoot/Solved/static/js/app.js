/* data route */
const url = "/data";

async function buildPlot() {
    const response = await d3.json(url)
    console.log(response);
    const trace = {
        type: "scatter",
        mode: "lines",
        name: "Bigfoot Sightings",
        x: response.map(data => data.year),
        y: response.map(data => data.sightings),
        line: {
            color: "#17BECF"
        }
    };

    const data = [trace];

    const layout = {
        title: "Bigfoot Sightings Per Year",
        xaxis: {
            type: "date"
        },
        yaxis: {
            autorange: true,
            type: "linear"
        }
    };

    Plotly.newPlot("plot", data, layout);
}

buildPlot();
