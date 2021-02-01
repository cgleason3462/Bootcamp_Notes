var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function mean(list){
    var sum = 0;
    for (i = 0; i < list.length; i++){
        sum = sum + list[i];
    }
    var mean = sum / list.length;
    return mean
}
var mean = 