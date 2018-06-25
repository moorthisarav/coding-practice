"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findDuplicates_1 = require("./../../code/arrays/findDuplicates");
var chai_1 = require("chai");
describe('Testing fin duplicates in array array', function () {
    var findDuplicate = new findDuplicates_1.FindDuplicate();
    //input
    var input = [1, 2, 3, 1, 3, 6, 6];
    console.log('input:');
    console.log(input);
    it('testing findDuplicateWithRange', function () {
        //Output
        console.log('output findDuplicateWithRange:');
        console.log(findDuplicate.findDuplicateWithRange(input));
        chai_1.expect('true').to.equal('true');
    });
    it('testing findDuplicateWithSorting', function () {
        console.log('output findDuplicateWithSorting:');
        console.log(findDuplicate.findDuplicateWithSorting(input));
        chai_1.expect('true').to.equal('true');
    });
    it('output findDuplicateWithMap', function () {
        console.log('output findDuplicateWithMap:');
        console.log(findDuplicate.findDuplicateWithMap(input));
        chai_1.expect('true').to.equal('true');
    });
});
//# sourceMappingURL=findDuplicates.js.map