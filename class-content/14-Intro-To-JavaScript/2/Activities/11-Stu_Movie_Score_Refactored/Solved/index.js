// Array of movie ratings
const movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
function addScores(runningSum, currentValue){
  return runningSum + currentValue
}
const sum = movieScores.reduce(addScores, 0)

// Arrays to hold movie scores
const goodMovieScores = movieScores.filter(function(score){
  return score>7
})
const okMovieScores = movieScores.filter(function(score){
  return score >= 5 && score <= 7
})
const badMovieScores = movieScores.filter(function(score){
  return score < 5
})

// Find the average score
const avg = sum / movieScores.length;

// Store the length of movie ratings
const numGoodMovies = goodMovieScores.length;
const numOkMovies = okMovieScores.length;
const numBadMovies = badMovieScores.length;

// Print results
console.log("---------");
console.log(`There are ${numGoodMovies} good movies.`);
console.log(`There are ${numOkMovies} ok movies.`);
console.log(`There are ${numBadMovies} bad movies.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");
