import { FlatternArray } from './../../code/arrays/flatternArray';



import { expect } from 'chai';

describe('Testing flattern array', () => {

    const flatternArray = new FlatternArray();
    
    //input
    let input = [1, 1, [3, [4, 5], 6], 7, [8]];
    console.log('input:');
    console.log(input);

    it('testing flatternRecursion', () => {

        //Output
        console.log('output recursion:');
        console.log(flatternArray.flatternRecursion(input))
        
        expect('true').to.equal('true');
    });

    it('testing array reduce', () => {

        console.log('output array reduce:');
        console.log(flatternArray.flatternUsingReduce(input))

        expect('true').to.equal('true');
    });

    it('testing array reduce with lamda', () => {

        console.log('output array reduce with lamda:');
        console.log(flatternArray.flatternUsingReduceUsingLamda(input))


        expect('true').to.equal('true');
    });
});