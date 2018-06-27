
export class Queue {

    private stack: any = [];

    add(item: any) {
        this.stack.push(item);
    }

    remove(item: any) {
        this.stack.shift();
    }

    getAll() {
        return this.stack;
    }

}