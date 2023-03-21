export class DOMManipulator {
    constructor () { }

    getDOMElement(elementId, callback) {
        const element = document.getElementById(elementId);
        element.addEventListener('click', callback);
    }
}
