import { DOMManipulator } from "../../../utils/domManipulator.utils.js";

export class BinaryTreeService {
    constructor() {
        this.binaryTree;
        this.binaryTreeInputEl;
    }

    createBinaryTreeEvents(_binaryTree) {
        this.binaryTree = _binaryTree;
        this.binaryTreeInputEl = document.getElementById('inputBinaryTree');

        this.renderBinaryTree();
        this.createInsertInBinaryTreeEvent();
        this.createDeleteFromBinaryTreeEvent();
        this.createLookupInBinaryTreeEvent();
        this.createBreadthFirstSearchEvent();
        this.createDepthFirstSearchEvent();
    }

    renderBinaryTree() {
        const container = document.getElementsByClassName('binary-tree__container')[0];
        container.innerHTML = '';

        const tree = document.createElement('div');
        tree.className = 'tf-tree';

        const ul = document.createElement('ul');
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'tf-nc';
        span.innerHTML = this.binaryTree.root.key;

        li.append(span);

        const children = this.createTreeBranches(this.binaryTree.root);
        const ulChildren = document.createElement('ul');
        ulChildren.append(children[0]);
        ulChildren.append(children[1]);

        li.append(ulChildren);

        ul.append(li);
        tree.append(ul);

        container.append(tree);
    }

    createTreeBranches(root) {
        const liChildLeft = document.createElement('li');
        const spanChildLeft = document.createElement('span');
        spanChildLeft.className = 'tf-nc';

        if (root.left) {
            spanChildLeft.innerHTML = root.left.key;
            liChildLeft.append(spanChildLeft);

            const ul = this.addChildrenNodes(root.left);
            if (ul) liChildLeft.append(ul);
        } else {
            liChildLeft.className = 'binary-tree__empty-node';

            spanChildLeft.innerHTML = 'null';
            liChildLeft.append(spanChildLeft);
        }

        const liChildRight = document.createElement('li');
        const spanChildRight = document.createElement('span');
        spanChildRight.className = 'tf-nc';

        if (root.right) {
            spanChildRight.innerHTML = root.right.key;
            liChildRight.append(spanChildRight);

            const ul = this.addChildrenNodes(root.right);
            if (ul) liChildRight.append(ul);
        } else {
            liChildRight.className = 'binary-tree__empty-node';

            spanChildRight.innerHTML = 'null';
            liChildRight.append(spanChildRight);
        }

        return [
            liChildLeft,
            liChildRight,
        ];
    }

    addChildrenNodes(node) {
        const ul = document.createElement('ul');
        const children = this.createTreeBranches(node);

        if (!(children[0].className === 'binary-tree__empty-node' &&
            children[1].className === 'binary-tree__empty-node')) {
            ul.append(children[0]);
            ul.append(children[1]);
            
            return ul;
        }

        return;
    }

    createInsertInBinaryTreeEvent() {
        DOMManipulator.prototype.getDOMElement('insertBinaryTreeButton', () => {
            this.binaryTree.insert(this.binaryTreeInputEl.value);
            this.renderBinaryTree();
        });
    }

    createDeleteFromBinaryTreeEvent() {
        DOMManipulator.prototype.getDOMElement('deleteBinaryTreeButton', () => {
            this.binaryTree.delete(this.binaryTreeInputEl.value);
            this.renderBinaryTree();
        });
    }

    createLookupInBinaryTreeEvent() {
        DOMManipulator.prototype.getDOMElement('lookupBinaryTreeButton', () => {
            const value = this.binaryTree.lookup(this.binaryTreeInputEl.value);
            
            if (value) {
                alert(`This item (${this.binaryTreeInputEl.value}) was found on the BinaryTree!`);
            } else {
                alert(`This item (${this.binaryTreeInputEl.value}) was NOT found on the BinaryTree!`);
            }
        });
    }

    createBreadthFirstSearchEvent() {
        DOMManipulator.prototype.getDOMElement('bfsBinaryTreeButton', () => {
            alert(this.binaryTree.breadthFirstSearch());
        });
    }

    createDepthFirstSearchEvent() {
        DOMManipulator.prototype.getDOMElement('dfsInOrderBinaryTreeButton', () => {
            alert(this.binaryTree.depthFirstSearch('inOrder'));
        });

        DOMManipulator.prototype.getDOMElement('dfsPreOrderBinaryTreeButton', () => {
            alert(this.binaryTree.depthFirstSearch('preOrder'));
        });

        DOMManipulator.prototype.getDOMElement('dfsPostOrderBinaryTreeButton', () => {
            alert(this.binaryTree.depthFirstSearch('postOrder'));
        });
    }
}
