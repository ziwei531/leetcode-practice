class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // insert last node
    insertLast(data) {
        let node = new Node(data);
        let current = this.head;

        // if list is initially empty
        if (!this.head) {
            this.insertFirst(data);
            return;
        }

        // last node has no current.next as it is null, so do while (current.next)
        while (current.next) {
            current = current.next;
        }

        current.next = node;
        this.size++;
    }

    // insert at index
    insertAt(data, index) {
        if ((index > 0 && index > this.size) || index < 0) {
            throw new Error("Index does not exist!");
        }

        // if first index
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        const node = new Node(data, current.next);

        current.next = node;
        this.size++;
    }

    // get at index
    getAt(index) {
        if ((index > 0 && index > this.size) || index < 0) {
            throw new Error("Index does not exist!");
        }

        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                console.log(`Data at ${index}: ` + current.data);
                return;
            }
            count++;
            current = current.next;
        }
    }

    // remove at index
    removeAt(index) {
        if ((index > 0 && index > this.size) || index < 0) {
            throw new Error("Index does not exist!");
        }

        let current = this.head;

        let previous;
        let count = 0;
    }

    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
        console.log("Clearing list...");
    }

    // print list data
    printListData() {
        let current = this.head;

        if (!current) {
            console.log("List is empty!");
            return;
        }

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.insertFirst(100);
linkedList.printListData();
linkedList.clearList();
linkedList.insertLast(200);
linkedList.insertLast(300);
linkedList.printListData();
