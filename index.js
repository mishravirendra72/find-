function findSums(arr, value) {
    var sums = [];
    for (var x = 0; x < arr.length; x++) {
        for (var j = x + 1; j < arr.length; j++) {
            if (arr[x] + arr[j] == value) {
                sums.push([arr[x], arr[j]])
                return sums;

            }
        }
    }
}

console.log(findSums([1, 21, 3, 14, 5, 60, 7, 6], 81));