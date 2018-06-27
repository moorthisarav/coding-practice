
export class Queue {

    private queue: number[] = [];

    push(item: any) {
        this.queue.unshift(item);
    }

    pop() {
        return this.queue.shift();
    }

    bottom() {
        if (this.queue && this.queue.length > 0) {
            let first = this.queue.shift();
            if (first) {
                this.queue.unshift(first);
            }
            return first;
        } else {
            return -1;
        }
    }

    sort() {
        if (this.queue && this.queue.length > 0) {

            let tempqueue = new Queue();
            
            while(this.queue.length > 0) {

                let item = this.queue.shift();
                
                while(tempqueue.getLength() > 0 && tempqueue.bottom() < item) {
                    this.queue.unshift(tempqueue.pop())
                }

                tempqueue.push(item);

            }

            while (tempqueue.getLength() > 0) {
                this.queue.unshift(tempqueue.pop());
            }

        }
    }

    getAll() {
        return this.queue;
    }

    getLength() {
        if(this.queue) {
            return this.queue.length;
        }
        else {
            return 0;
        }
    }

}