// Define function
function wordCount(myString){
    // Convert string to an array of words
    var stringArray = myString.split(" ");
    // Create an object to hold word frequency
    var wordFreq = {};
    // declare counter
    var wordCount = 0;


    // Iterate through the array
    for (var i = 0; i < stringArray.length; i++){
        var key = stringArray[i];
        if(key in wordFreq){
            wordCount += 1;
            wordFreq[key] = wordCount;
        }
        else{
            wordFreq[key] = 1;
        } 
    }
    console.log(wordFreq);
    return wordFreq;
}

wordCount("I yam what I yam and always will be what I yam")
