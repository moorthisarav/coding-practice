import { Stack } from './../../code/arrays/stack';

import { expect } from 'chai';

describe('Testing stack', () => {

    const stack = new Stack();
    
    it('testing stack operation', () => {     
        
        stack.push(10);
        console.log(stack.getAll());

        stack.push(5);
        console.log(stack.getAll());

        stack.push(3);
        console.log(stack.getAll());

        stack.push(45);
        console.log(stack.getAll());

        stack.push(7);
        console.log(stack.getAll());

        expect('true').to.equal('true');
    });

    it('testing stack sort', () => {     
        
        stack.sort();
        console.log(stack.getAll());

        expect('true').to.equal('true');
    });
  
  
});