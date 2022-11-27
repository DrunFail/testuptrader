//function Node(value: string) {
//    this.id = Date.now() + 1,
//        this.taskId = 2,
//        this.commentId = 3,
//        this.value = value,
//        this.parent = null;
//    this.comments = [];
//}



///*таска становится рут элементом дерева*/
// function RootTask(value) {
//    this.id = Date.now(),
//        this.value = value,
//        this.description = 'dkdkdkdk',
//        this.dateCreate = '11.11.2022',
//        this.nestedTasks = [],
//        this.comments = [],
//        this.parent = null
//}
//export function TaskTree(value) {
//    const node = new RootTask(value);
//    this._root = node;
//}

//function Tree(value: string) {
//    const node = new Node(value);
//    this._root = node;
//}

//Tree.prototype.traverseDF = function (callback) {
//    (function recurse(currentNode) {
//        for (let i = 0, length = currentNode.children.length; i < length; i++) {
//            recurse(currentNode.children[i]);
//        }
//        callback(currentNode);
//    })(this._root);
//}

//TaskTree.prototype.traverseBF = function (callback) {
//    let queue = new Queue();
//    queue.enqueue(this._root);
//    let currentTree = queue.dequeue();

//    while (currentTree) {
//        for (let i = 0, length = currentTree.comments.length; i < length; i++) {
//            queue.enqueue(currentTree.comments[i]);
//        }
//        callback(currentTree);
//        currentTree = queue.dequeue();
//    }
//}

//TaskTree.prototype.contains = function (callback, traversal) {
//    traversal.call(this, callback);
//}

//TaskTree.prototype.addComment = function (value: string, toData, traversal) {
//    console.log(value)
//    console.log(toData)
//    let child = new Node(value),
//        parent = null,
//        callback = function (node) {
//            console.log(node.value)
//            console.log(toData)
//            if (node.value === toData) {

//                parent = node;
//            }
//        };
//    this.contains(callback, traversal);
//    console.log(parent)
//    if (parent) {
//        parent.comments.push(child);
//        child.parent = parent;
//    } else {
//        throw new Error('cannot add node to parent');
//    }
//};


//TaskTree.prototype.addTask = function (value: string, toData, traversal) {
//    let child = new RootTask(value),
//        parent = null,
//        callback = function (node) {
//            if (node.value === toData) {
//                parent = node;
//            }
//        };
//    this.contains(callback, traversal);

//    if (parent) {
//        parent.nestedTasks.push(child);
//        child.parent = parent;
//    } else {
//        throw new Error('cannot add node to parent');
//    }
//};


//Tree.prototype.remove = function (data, fromData, traversal) {
//    let tree = this,
//        parent = null,
//        childToRemove = null,
//        index;

//    const callback = function (node) {
//        if (node.data === fromData) {
//            parent = node;
//        }
//    };

//    this.contains(callback, traversal);

//    if (parent) {
//        index = findIndex(parent.children, data);

//        if (index === undefined) {
//            throw new Error('node to remove does not exist');
//        } else {
//            childToRemove = parent.children.splice(index, 1);
//        }
//    } else {
//        throw new Error('parent does not exist');
//    }
//    return childToRemove;
//};

//function findIndex(arr, data) {
//    let index;

//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i].data === data) {
//            index = 1;
//        }
//    }
//    return index;
//}



//class Queue {
//    constructor() {
//        this.items = {};
//        this.headIndex = 0;
//        this.tailIndex = 0;
//    }
//    enqueue(item) {
//        this.items[this.tailIndex] = item;
//        this.tailIndex++;
//    }
//    dequeue() {
//        const item = this.items[this.headIndex];
//        delete this.items[this.headIndex];
//        this.headIndex++;
//        return item;
//    }
//    peek() {
//        return this.items[this.headIndex];
//    }
//    get length() {
//        return this.tailIndex - this.headIndex;
//    }
//}