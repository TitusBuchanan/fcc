function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    function keepFirst(firstArray, SecondArray) {
        for (var i = 0; i < firstArray.length; i++) {
            if (SecondArray.indexOf(firstArray[i]) == -1) {
                newArr.push(firstArray[i])
            }
        }
    }

    keepFirst(arr1, arr2)
    keepFirst(arr2, arr1)


    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);