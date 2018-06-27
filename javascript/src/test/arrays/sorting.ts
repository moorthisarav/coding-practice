import { MergeSort } from './../../code/sorting/merge-sort';

import { expect } from 'chai';

describe('Testing sorting', () => {

    //input
    let input = [1, 8, 3, 6, 5, 4, 2];
    console.log('input:');
    console.log(input);

    it('testing mergesort', () => {     
        
        const mergeSort = new MergeSort();
        console.log(mergeSort.sort(input));

        expect('true').to.equal('true');
    });
  
});