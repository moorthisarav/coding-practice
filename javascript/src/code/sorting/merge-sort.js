"use strict";
exports.__esModule = true;
var MergeSort = /** @class */ (function () {
    function MergeSort() {
    }
    MergeSort.prototype.sort = function (array) {
        if (array && array.length > 1) {
            // console.log('array');
            // console.log(array);
            var middle = array.length / 2;
            var firstHalf = array.slice(0, middle);
            var secondHalf = array.slice(middle);
            // console.log('firstHalf');
            // console.log(firstHalf);
            // console.log('secondHalf');
            // console.log(secondHalf);
            firstHalf = this.sort(firstHalf);
            secondHalf = this.sort(secondHalf);
            return this.merge(firstHalf, secondHalf);
        }
        else {
            return array;
        }
    };
    MergeSort.prototype.merge = function (left, right) {
        var result = [];
        var left_index = 0;
        var right_index = 0;
        while (left_index < left.length && right_index < right.length) {
            if (left[left_index] <= right[right_index]) {
                result.push(left[left_index]);
                left_index++;
            }
            else {
                result.push(right[right_index]);
                right_index++;
            }
        }
        /* Copy the remaining elements of left  are any */
        while (left_index < left.length) {
            result.push(left[left_index]);
            left_index++;
        }
        /* Copy the remaining elements of left  are any */
        while (right_index < right.length) {
            result.push(right[right_index]);
            right_index++;
        }
        // console.log('left');
        // console.log(left);
        // console.log('right');
        // console.log(right);
        // console.log('result');
        // console.log(result);
        return result;
    };
    return MergeSort;
}());
exports.MergeSort = MergeSort;
// let dupInput = [1, 8, 3, 6, 5, 4];
// var mergeSort = new MergeSort();
// console.log(mergeSort.sort(dupInput)); 
