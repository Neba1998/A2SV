var MinStack = function() {
    this.stack=[];
    
    this.min=Infinity;
    this.size=0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(val < this.min){
        this.min=val;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     const popped = this.stack.pop();
    if (this.min === popped) {
        this.min = Math.min(...this.stack);
    }
    return popped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
     return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
