export class Stack {

    private stack: number[] = [];

    push(item: number) {
        this.stack.push(item);
    }

    pop() {
      return this.stack.pop();
    }

    top() {
        if (this.stack && this.stack.length > 0) {
            let first = this.stack.pop();
            if (first) {
                this.stack.push(first);
            }
            return first;
        } else {
            return -1;
        }
    }

    sort() {
        if (this.stack && this.stack.length > 0) {

            let tempstack = new Stack();
            
            while(this.stack.length > 0) {

                let item = this.stack.pop();
                
                while(tempstack.getLength() > 0 && tempstack.top() < item) {
                    this.stack.push(tempstack.pop())
                }

                tempstack.push(item);

            }

            while (tempstack.getLength() > 0) {
                this.stack.push(tempstack.pop());
            }

        }
    }

    getAll() {
        return this.stack.reverse();
    }

    getLength() {
        if(this.stack) {
            return this.stack.length;
        }
        else {
            return 0;
        }
    }

}