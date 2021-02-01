async function buildPlot() {
    /* data route */
    const url = "/api/pals";

    const response = await d3.json(url);

    console.log(response);

    const data = response;

    const layout = {
        scope: "usa",
        title: "Pet Pals",
        showlegend: false,
        height: 600,
                // width: 980,
        geo: {
            scope: "usa",
            projection: {
            type: "albers usa"
            },
            showland: true,
            landcolor: "rgb(217, 217, 217)",
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: "rgb(255,255,255)",
            countrycolor: "rgb(255,255,255)"
        }
    };
    Plotly.newPlot("plot", data, layout);
}

buildPlot();
