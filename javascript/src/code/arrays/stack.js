"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (item) {
        this.stack.push(item);
    };
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Stack.prototype.top = function () {
        if (this.stack && this.stack.length > 0) {
            var first = this.stack.pop();
            if (first) {
                this.stack.push(first);
            }
            return first;
        }
        else {
            return -1;
        }
    };
    Stack.prototype.sort = function () {
        if (this.stack && this.stack.length > 0) {
            var tempstack = new Stack();
            while (this.stack.length > 0) {
                var item = this.stack.pop();
                while (tempstack.getLength() > 0 && tempstack.top() < item) {
                    this.stack.push(tempstack.pop());
                }
                tempstack.push(item);
            }
            while (tempstack.getLength() > 0) {
                this.stack.push(tempstack.pop());
            }
        }
    };
    Stack.prototype.getAll = function () {
        return this.stack;
    };
    Stack.prototype.getLength = function () {
        if (this.stack) {
            return this.stack.length;
        }
        else {
            return 0;
        }
    };
    return Stack;
}());
exports.Stack = Stack;
