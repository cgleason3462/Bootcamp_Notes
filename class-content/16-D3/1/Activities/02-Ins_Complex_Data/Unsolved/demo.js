var complexData = [{
    title: "javascript",
    url: "https://media.giphy.com/media/10bdAP4IOmoN7G/giphy.gif"
  },
  {
    title: "python",
    url: "https://media.giphy.com/media/2yP1jNgjNAkvu/giphy.gif"
  },
  {
    title: "css",
    url: "https://media.giphy.com/media/TsxMkIKHpvFaU/giphy.gif"
  }
  ];

// Select all divs inside divs to bind data to it
d3.select(".img-gallery").selectAll("div")
// Bind Data
  .data(complexData)
// use .enter to append data
  .enter()
// append the dive to the new placeholder made by enter
  .append("div")
// Gonna get data in, take data and return the images
  .html(function(d){
      return `<img src"${d.url}">`
  });