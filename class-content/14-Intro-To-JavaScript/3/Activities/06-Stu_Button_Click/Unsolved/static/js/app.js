// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 9) + 1);

// Select the upvote and downvote buttons
var upvote = d3.select(".upvote");
var downvote = d3.select(".downvote");
// Select the counter h1 element
var counter = d3.select(".counter");
// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click", function(){
    // Select Current Count
    var currentCount = parseInt(counter.text());

    // Have counter tick upwards
    currentCount += 1;

    // Have the counter display the new count
    counter.text(currentCount);
});
// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", function(){
    // Select the current count
    var currentCount = parseInt(counter.text());

    // Have counter tick downwards
    currentCount -= 1;

    // Have the counter display the text
    counter.text(currentCount);

});