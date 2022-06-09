class Node {
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}


//common cases to check: 
//if list is empty. (this.head === null) || (!this.head.=/tail)
//if list only has one value. (this.head === this.tail)

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        // this.length = 0
    }
    //traverse
    traverse(){
        //goes through the linkedList until it's null 
        let str = ''
        let curr = this.head
        //if the curr
        while(curr !== null){
            str = `${str} ${curr.val} ->`
            curr = curr.next
        }
        console.log(str)
        return str
    }

    //prepend
    prepend(data){
        //have the new data point to the current head
        let node = new Node(data)
        if(this.head === null) {
            this.head = node
            this.tail = node
        }else {
            //have the new node POINT to the head first before making it the head
            node.next = this.head
            //this is what connects it to be part of the linkedList
            this.head = node
        }
    }

    //append
    append(data){
        //have new data point to the current tail (end)
        let node = new Node(data)
        if(this.head === null){
            this.head = node
            this.tail = node
        }else {
            //sets the tail reference/pointer/points at the new node 
            this.tail.next = node
            //once pointer is pointing to tail, fully sets the next node reference to be the tail
            this.tail = node
        }
    }

    //deleteHead
    deleteHead(){
        //making current head this.next the new head
        if(this.head === null) {
            return null
        } else {
            //if list only has 1 value
            if(this.head === this.tail){
                this.head = null
                this.tail = null
            }else { 
                this.head = this.head.next
            }
        }
    }
    
    
    //deleteTail (singly linkedList method)
    deleteTail(){
        if(!this.head){
            return null;
        }
        // if only one node in the list
        if(!this.head.next){
            this.head = null;
            return;
        }
        //   1 -> 2 -> 3 -> null
        // prev  tail
        //must have two pointers
        let previous = this.head;
        let tail = this.head.next;
        
       while(tail.next !== null){
           console.log(tail)
           previous = tail;
           tail = tail.next;
       }
       
       previous.next = null;
       return this.head;
    }

    //search(find only the first of its kind value)
    contains(data){
        //case theres no data/missing data
        let curr = this.head

        //   1 -> 2 -> 3 -> null
        //  curr
        while(curr !== null){
            if(curr.val === data){
                return true
            }
            curr = curr.next
        }
        return false
    }
    clear(){
        this.head = null
    }
    

}

//read this over and over


const linkedList = new LinkedList()
linkedList.prepend(1)
linkedList.prepend(0)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
// linkedList.clear()
// linkedList.deleteTail()

// linkedList.deleteHead()
// linkedList.deleteTail()
// console.log(linkedList.contains(4))

linkedList.traverse()