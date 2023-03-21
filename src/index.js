import { Bootstrap } from './utils/bootstrap.utils.js';

import { Array, LinkedList, Queue, Stack } from 'data-structures-playground/src/modules/linear-data-structures/linear-data-structures.module.js';
import { BinaryTree } from 'data-structures-playground/src/modules/non-linear-data-structures/non-linear-data-structures.module.js';

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
}

const index = new Index();
index.setApplicationName('[Data Structures Playground]');

Bootstrap.prototype.createScreen();
index.fillArray();
index.createLinkedList();
index.createQueue();
index.createStack();
index.createBinaryTree();

setTimeout(() => {
    Bootstrap.prototype.createDOMEvents(index);
}, 3000);
