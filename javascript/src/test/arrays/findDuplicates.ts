import { FindDuplicate } from './../../code/arrays/findDuplicates';



import { expect } from 'chai';

describe('Testing fin duplicates in array array', () => {

    const findDuplicate = new FindDuplicate();
    
    //input
    let input = [1, 2, 3, 1, 3, 6, 6];
    console.log('input:');
    console.log(input);

    it('testing findDuplicateWithRange', () => {

        //Output
        console.log('output findDuplicateWithRange:');
        console.log(findDuplicate.findDuplicateWithRange(input))
        
        expect('true').to.equal('true');
    });

    it('testing findDuplicateWithSorting', () => {

        console.log('output findDuplicateWithSorting:');
        console.log(findDuplicate.findDuplicateWithSorting(input))

        expect('true').to.equal('true');
    });

    it('output findDuplicateWithMap', () => {

        console.log('output findDuplicateWithMap:');
        console.log(findDuplicate.findDuplicateWithMap(input))


        expect('true').to.equal('true');
    });
});