async function buildPlot() {
    /* data route */
    const url = "/api/pals";
    // @TODO: Build your plot here
    const trace = await d3.json(url);
    Plotly.plot("plot", [trace])
}

buildPlot();
