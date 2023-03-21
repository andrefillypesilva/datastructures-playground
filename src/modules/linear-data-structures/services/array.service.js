import { DOMManipulator } from "../../../utils/domManipulator.utils.js";

export class ArrayService {
    constructor () {
        this.array;
        this.arrayInputEl;
    }

    createArrayEvents(_array) {
        this.array = _array;
        this.arrayInputEl = document.getElementById('arrayInput');

        this.createShowArrayEvent();
        this.createShowArrayLengthEvent();
        this.createSortArrayEvent();
        this.createGetArrayEvent();
        this.createPushArrayEvent();
        this.createFindArrayEvent();
        this.createUnshiftArrayEvent();
        this.createUpdateArrayEvent();
        this.createSliceArrayEvent();
        this.createSpliceArrayEvent();
        this.createShiftArrayEvent();
        this.createPopArrayEvent();
    }

    promptMessage(message, element) {
        const promptContainerEl = document.getElementsByClassName('array__terminal-prompt')[0];
        const promptEl = document.getElementsByClassName('array__terminal-prompt--old-commands')[0];
        const currentLineEl = document.getElementsByClassName('terminal-prompt__current-line')[0];
        currentLineEl.innerHTML = message;

        setTimeout(() => {
            const instruction = document.createElement('span');
            instruction.innerHTML = `> ${message}`;
            promptEl.append(instruction);

            const alert = document.createElement('a');
            alert.setAttribute('href', '#');
            alert.innerHTML = element;
            promptEl.append(alert);

            currentLineEl.innerHTML = '';

            promptContainerEl.scrollTop = promptContainerEl.scrollHeight;
        }, 500);
    }

    createShowArrayEvent() {
        DOMManipulator.prototype.getDOMElement('showArrayButton', () => {
            this.promptMessage('See array', this.array.join(' - '));
        });
    }

    createShowArrayLengthEvent() {
        DOMManipulator.prototype.getDOMElement('lengthArrayButton', () => {
            this.promptMessage('See array length', this.array.length());
        });
    }

    createSortArrayEvent() {
        DOMManipulator.prototype.getDOMElement('sortArrayButton', () => {
            this.array.sort();
            this.promptMessage('Sort array', this.array.join(' - '));
        });
    }

    createGetArrayEvent() {
        DOMManipulator.prototype.getDOMElement('getArrayButton', () => {
            this.promptMessage('Get an element from array', this.array.get(this.arrayInputEl.value));
        });
    }

    createPushArrayEvent() {
        DOMManipulator.prototype.getDOMElement('pushArrayButton', () => {
            this.array.push(this.arrayInputEl.value);
            this.promptMessage('Push element into array', this.array.join(' - '));
        });
    }

    createFindArrayEvent() {
        DOMManipulator.prototype.getDOMElement('findArrayButton', () => {
            this.promptMessage('Find element into array', this.array.find(this.arrayInputEl.value));
        });
    }

    createUnshiftArrayEvent() {
        DOMManipulator.prototype.getDOMElement('unshiftArrayButton', () => {
            this.array.unshift(this.arrayInputEl.value);
            this.promptMessage('Unshift element into array', this.array.join(' - '));
        });
    }

    createUpdateArrayEvent() {
        DOMManipulator.prototype.getDOMElement('updateArrayButton', () => {
            const updateArrayInput = document.getElementById('updateArrayInput');
            const updateArrayIndexInput = document.getElementById('updateArrayIndexInput');
            
            this.array.update(updateArrayIndexInput.value, updateArrayInput.value);
            this.promptMessage('Update an array element', this.array.join(' - '));
        });
    }

    createSliceArrayEvent() {
        DOMManipulator.prototype.getDOMElement('sliceArrayButton', () => {
            const sliceStartArrayInput = document.getElementById('sliceStartArrayInput');
            const sliceEndArrayInput = document.getElementById('sliceEndArrayInput');
            const newElement = this.array.slice(sliceStartArrayInput.value, sliceEndArrayInput.value);

            this.promptMessage('Slice', JSON.stringify(newElement));
        });
    }

    createSpliceArrayEvent() {
        DOMManipulator.prototype.getDOMElement('spliceArrayButton', () => {
            const spliceStartArrayInput = document.getElementById('spliceStartArrayInput');
            const spliceQuantityArrayInput = document.getElementById('spliceQuantityArrayInput');
            const spliceArrayInput = document.getElementById('spliceArrayInput');
            const newElement = this.array.splice(spliceStartArrayInput.value, spliceQuantityArrayInput.value, spliceArrayInput.value);

            this.promptMessage('Splice', JSON.stringify(newElement));
        });
    }

    createShiftArrayEvent() {
        DOMManipulator.prototype.getDOMElement('shiftArrayButton', () => {
            this.array.shift();
            this.promptMessage('Shift element from array', this.array.join(' - '));
        });
    }

    createPopArrayEvent() {
        DOMManipulator.prototype.getDOMElement('popArrayButton', () => {
            this.array.pop();
            this.promptMessage('Pop element from array', this.array.join(' - '));
        });
    }
}
