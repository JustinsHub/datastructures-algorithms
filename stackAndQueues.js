class Node {
    constructor(val, next=null){
        this.val = val
        this.next = next
    }
}

//LIFO
//Last in, first out
class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    //adds to the stack
    push(val){
        let node = new Node(val)
        if(this.size === 0){
            this.first = node
            this.last = node
        } else{
            node.next = this.first
            this.first = node
        }
        this.size++
    }
    
    //removes from stack
    pop(){
       //if no node, return
       if(this.size === 0) return null
       //if one node on the list
       if(this.first === this.last){
            this.first = null
            this.last = null
       } 
        let temp = this.first
        this.first = this.first.next
        this.size--
        console.log('removed', temp.val)
    }

    traverse(){
        let curr = this.first
        if(this.size === 0){
            return null
        } 
        while(curr !== null){
            console.log(curr.val)
            curr = curr.next 
        }
        return curr
    }

    peek(){
        console.log(this.first)
        return this.first
    }
}


const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.pop()
// stack.pop()
// // stack.peek()
// stack.traverse()

//FIFO
//First in, first out
class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    //adds val/el to the queue
    enqueue(val){
        let node = new Node(val)
        if(this.size === 0){
            this.first = node
            this.last = node
        }else {
            this.last.next = node
            this.last = node
        }
        this.size++
    }
    
    //removes from queue
    dequeue(){
        //if list is empty 
        if(this.size === 0){
            return null
        }
        if(this.first === this.last){
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        this.size--
    }

    traverse(){
        let curr = this.first
        if(this.size === 0) {
            return null
        }
        while(curr !== null){
            console.log(curr.val)
            curr = curr.next
        }
        return curr
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue()

queue.traverse()
