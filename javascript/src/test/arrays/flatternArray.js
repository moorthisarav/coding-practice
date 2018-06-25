"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flatternArray_1 = require("./../../code/arrays/flatternArray");
var chai_1 = require("chai");
describe('Testing flattern array', function () {
    var flatternArray = new flatternArray_1.FlatternArray();
    //input
    var input = [1, 1, [3, [4, 5], 6], 7, [8]];
    console.log('input:');
    console.log(input);
    it('testing flatternRecursion', function () {
        //Output
        console.log('output recursion:');
        console.log(flatternArray.flatternRecursion(input));
        chai_1.expect('true').to.equal('true');
    });
    it('testing array reduce', function () {
        console.log('output array reduce:');
        console.log(flatternArray.flatternUsingReduce(input));
        chai_1.expect('true').to.equal('true');
    });
    it('testing array reduce with lamda', function () {
        console.log('output array reduce with lamda:');
        console.log(flatternArray.flatternUsingReduceUsingLamda(input));
        chai_1.expect('true').to.equal('true');
    });
});
//# sourceMappingURL=flatternArray.js.map