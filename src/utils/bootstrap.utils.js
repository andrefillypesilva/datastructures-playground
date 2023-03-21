import { ArrayService } from "../modules/linear-data-structures/services/array.service.js";
import { LinkedListService } from "../modules/linear-data-structures/services/linked-list.service.js";
import { QueueService } from "../modules/linear-data-structures/services/queue.service.js";
import { StackService } from "../modules/linear-data-structures/services/stack.service.js";
import { BinaryTreeService } from "../modules/non-linear-data-structures/services/binary-tree.service.js";

export class Bootstrap {
    constructor() { }

    async createScreen() {
        const main = document.getElementsByClassName('data-structures-playground__main')[0];
        const children = [...main.children];
        const components = children.map(child => {
            return child.id;
        }).filter(component => component);

        for (component of components) {
            const response = await fetch(`./components/${component}.html`);
            const data = await response.text();
            document.getElementById(component).innerHTML = data;
        }
    }

    createDOMEvents(elements) {
        ArrayService.prototype.createArrayEvents(elements.array);
        LinkedListService.prototype.createLinkedListEvents(elements.linkedList);
        QueueService.prototype.createQueueEvents(elements.queue);
        StackService.prototype.createStackEvents(elements.stack);
        BinaryTreeService.prototype.createBinaryTreeEvents(elements.binaryTree);
    }
}
