// JavaScript Program to Implement a Queue

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
    //adds a new element
    enqueue(element) {
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }
    //removes an element from head of the queue
    dequeue() {
        let removedElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removedElement;
    }
    //shows the head element of the  queue
    peek() {
        let peekElement = this.items[this.headIndex];
        return peekElement;
    }
    //shows the number of items in queue
    size() {
        return this.tailIndex - this.headIndex;
    }
    //checks if queue is empty or not
    isEmpty() {
        if (this.tailIndex - this.headIndex == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    //empty the queue
    clear() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}
let queue = new Queue();

// add items to queue
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);

console.log("Queue after adding items: ");
console.log(queue.items);

// remove the first item
queue.dequeue();

console.log("Queue after deleting the first item:");
console.log(queue.items);

// show the first item
console.log("First item of the queue = " + queue.peek());

// empty the queue
queue.clear();

console.log("After clearing the queue: ");
console.log(queue.items);