import { DOMManipulator } from "../../../utils/domManipulator.utils.js";

export class StackService {
    constructor() {
        this.stack;
        this.stackInputEl;
    }

    createStackEvents(_stack) {
        this.stack = _stack;
        this.stackInputEl = document.getElementById('stackValueInput');

        this.renderStack();

        this.createPushEvent();
        this.createPopEvent();
        this.createLookupEvent();
        this.createPeekEvent();
    }

    renderStack() {
        const container = document.getElementsByClassName('stack__box')[0];
        container.innerHTML = '';

        let current = this.stack.head;

        while (current) {
            const item = document.createElement('div');
            item.className = 'stack__item';
            item.innerHTML = current.value;
            container.append(item);

            current = current.next;
        }
    }

    createPushEvent() {
        DOMManipulator.prototype.getDOMElement('pushStackButton', () => {
            this.stack.push(this.stackInputEl.value);
            this.renderStack();
        });
    }

    createPopEvent() {
        DOMManipulator.prototype.getDOMElement('popStackButton', () => {
            this.stack.pop();
            this.renderStack();
        });
    }

    createLookupEvent() {
        DOMManipulator.prototype.getDOMElement('lookupStackButton', () => {
            const item = this.stack.lookupStack(this.stackInputEl.value);
            const response = item ? `This item (${item.value}) was found!` : 'This item does not exists in the Stack.';
            alert(response);
        });
    }

    createPeekEvent() {
        DOMManipulator.prototype.getDOMElement('peekStackButton', () => {
            const item = this.stack.peek();
            const response = item ? `This is the top item in the Stack: ${item.value}` : 'This Stack is empty.';
            alert(response);
        });
    }
}
