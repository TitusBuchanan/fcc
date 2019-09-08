
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(array) {
    var results = [];
    for (var i = 0; i < array.length; i++) {
        var largestNumber = array[i][0];
        for (var j = 1; j < array[i].length; j++) {
            if (array[i][j] > largestNumber) {
                largestNumber = array[i][j];
            }
        }

        results[i] = largestNumber;
    }

    return results;
}