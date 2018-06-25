//Flattern the given multi dimentional array to single array 
var input = [1, 1, [3, [4, 5], 6], 7, [8]];
console.log('input:');
console.log(input);
var FlatternArray = /** @class */ (function () {
    function FlatternArray() {
    }
    //flatern array using recursion
    FlatternArray.prototype.flatternRecursion = function (array) {
        var result = [];
        for (var i = 0; i < array.length; i++) {
            var arrVal = array[i];
            if (Array.isArray(arrVal)) {
                result = result.concat(this.flatternRecursion(arrVal));
            }
            else {
                result.push(arrVal);
            }
        }
        return result;
    };
    FlatternArray.prototype.flatternUsingReduce = function (array) {
        var self = this;
        return array.reduce(function (a, b) {
            if (Array.isArray(b)) {
                return a.concat(self.flatternUsingReduce(b));
            }
            else {
                return a.concat(b);
            }
        }, []);
    };
    FlatternArray.prototype.flatternUsingReduceUsingLamda = function (array) {
        var self = this;
        return array.reduce(function (a, b) { return a.concat(Array.isArray(b) ? self.flatternUsingReduceUsingLamda(b) : b); }, []);
    };
    return FlatternArray;
}());
var flatternArray = new FlatternArray();
console.log('output recursion:');
console.log(flatternArray.flatternRecursion(input));
console.log('output array reduce:');
console.log(flatternArray.flatternUsingReduce(input));
console.log('output array reduce with lamda:');
console.log(flatternArray.flatternUsingReduceUsingLamda(input));
