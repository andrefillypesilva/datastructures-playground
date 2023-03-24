import { Bootstrap } from './utils/bootstrap.utils.js';

import { Array, LinkedList, Queue, Stack, BinaryTree } from '@datastructures-es6/core/src/index.js';

import './index.scss';

export class Index {
    #_applicationName;

    getApplicationName() {
        return this.#_applicationName;
    }

    setApplicationName(value) {
        this.#_applicationName = value;
    }

    constructor() {
        this.array = new Array();
        this.linkedList = new LinkedList();
        this.queue = new Queue();
        this.stack = new Stack();
        this.binaryTree = new BinaryTree();
    }

    fillArray() {
        for (let i = 0; i < 10; i++) {
            this.array.push(Math.floor(Math.random() * i * 100));
        }
    }

    createLinkedList() {
        for (let i = 0; i < 8; i++) {
            this.linkedList.append(Math.floor(Math.random() * i * 100));
        }
    }

    createQueue() {
        const people = [
            'drunk-man',
            'glorious-man',
            'running-boy',
            'running-woman',
            'waiting-man',
            'waiting-man-2',
            'waiting-woman',
            'waiting-woman-2'
        ];


        for (let i = 0; i < 3; i++) {
            this.queue.enqueue(people[Math.floor(Math.random() * 8)]);
        }
    }

    createStack() {
        for (let i = 0; i < 3; i++) {
            this.stack.push(Math.floor(Math.random() * i * 100));
        }
    }

    createBinaryTree() {
        for (let i = 0; i < 8; i++) {
            const leafValue = Math.floor(Math.random() * 100);
            this.binaryTree.insert(leafValue);
        }
    }

    maximumDepthOfBinaryTree() {
        const currentNode = this.binaryTree.root;
        const currentDepth = {
            value: 0,
        }
        const maxDepth = {
            value: 0,
        };

        const result = this.traverseBinaryTree(currentNode, [], currentDepth, maxDepth);
        console.log(`Maximum Depth Of Binary Tree (${result.list}): ${result.maxDepth.value}`);
    }

    traverseBinaryTree(node, list, currentDepth, maxDepth) {
        list.push(node.key);
        currentDepth.value++;
        if (currentDepth.value > maxDepth.value) maxDepth.value = currentDepth.value;

        if (node.left) {
            this.traverseBinaryTree(node.left, list, currentDepth, maxDepth);
        }

        if (node.right) {
            this.traverseBinaryTree(node.right, list, currentDepth, maxDepth);
        }

        currentDepth.value--;
        return {
            list,
            currentDepth,
            maxDepth,
        };
    }
}

const index = new Index();
index.setApplicationName('[Data Structures Playground]');

Bootstrap.prototype.createScreen();
index.fillArray();
index.createLinkedList();
index.createQueue();
index.createStack();
index.createBinaryTree();
index.maximumDepthOfBinaryTree();

setTimeout(() => {
    Bootstrap.prototype.createDOMEvents(index);
}, 3000);
