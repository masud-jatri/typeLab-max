var calculate = function (num, operation) {
    return operation(num); // Although 
};
var multiply = function (num) {
    return num.reduce(function (result, num, index, arr) {
        return result *= num;
    });
};
console.log(calculate([1, 2, 3, 4, 5], multiply));
