import { DOMManipulator } from "../../../utils/domManipulator.utils.js";

export class QueueService {
    constructor() {
        this.queue;
        this.queueInputEl;
    }

    createQueueEvents(_queue) {
        this.queue = _queue;
        this.queueInputEl = document.getElementsByName('queueInputEl');

        this.renderQueue();

        this.createEnqueueEvent();
        this.createDequeueEvent();
        this.createLookupEvent();
        this.createPeekEvent();
    }

    renderQueue() {
        const container = document.getElementsByClassName('queue__container')[0];
        container.innerHTML = '';

        let current = this.queue.head;

        let counter = 1;

        while (current) {
            const item = document.createElement('div');
            item.className = 'queue__item';

            const img = document.createElement('img');
            img.setAttribute('src', `../images/${current.value}.png`);
            img.setAttribute('alt', current.value);
            
            item.append(img);
            container.prepend(item);

            current = current.next;
            counter++;
        }

        const item = document.createElement('div');
        item.className = 'queue__item';

        const img = document.createElement('img');
        img.setAttribute('src', '../images/balcony.png');
        img.setAttribute('alt', 'balcony');
        
        item.append(img);
        container.append(item);

        while (counter < 12) {
            const item = document.createElement('div');
            item.className = 'queue__item';
            container.prepend(item);
            counter++;
        }
    }

    createEnqueueEvent() {
        DOMManipulator.prototype.getDOMElement('enqueueQueueButton', () => {
            for (let i = 0; i < this.queueInputEl.length; i++) {
                if (this.queueInputEl[i].checked) {
                    this.queue.enqueue(this.queueInputEl[i].value);
                }
            }

            this.renderQueue();
        });
    }

    createDequeueEvent() {
        DOMManipulator.prototype.getDOMElement('dequeueQueueButton', () => {
            this.queue.dequeue();
            this.renderQueue();
        });
    }

    createLookupEvent() {
        DOMManipulator.prototype.getDOMElement('lookupQueueButton', () => {
            let item = null;
            for (let i = 0; i < this.queueInputEl.length; i++) {
                if (this.queueInputEl[i].checked) {
                    item = this.queue.lookupQueue(this.queueInputEl[i].value);
                }
            }
            const response = item ? `This item (${item.value}) was found!` : `This item does not exists in the Queue.`;
            alert(response);
        });
    }

    createPeekEvent() {
        DOMManipulator.prototype.getDOMElement('peekQueueButton', () => {
            const item = this.queue.peek();
            const response = item ? `This is the first item in the Queue: (${item.value})` : 'This Queue is empty.';
            alert(response);
        });
    }
}
