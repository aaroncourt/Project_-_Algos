// BST: Add
// Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

// BST: Contains
// Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

// BST: Min
// Create a min() method on the BST class that returns the smallest value found in the BST.

// BST: Max
// Create a max() BST method that returns the largest value contained in the binary search tree.

// BST: Size
// Write a size() method that returns the number of nodes (values) contained in the tree.

// BST: Is Empty
// Create an isEmpty() method to return whether the BST is empty (whether it contains no values).

class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
        }
}
class BST {
    constructor(name) {
        this.root = null;
        this.name = name
    }

    createNode(val){
        var runner = this.root;

        if (this.root == null){
            this.root = new BTNode(val);
            console.log("New root created!")
            return
        }

        while (runner.val != null){
            if (val <= runner.val){
                console.log(`${val} is less than or equal to ${runner.val}, went left`)
                if (!runner.left){
                    runner.left = new BTNode(val);
                    console.log("New node created!");
                    return
                }
                runner = runner.left;

                continue;
            } else if (val > runner.val){
                console.log(`${val} is greater than ${runner.val}, went right`)
                if (!runner.right){
                    runner.right = new BTNode(val);
                    console.log("New node created!");
                    return
                }
                runner = runner.right;
                continue
            }
        }        
    }

    min(){
        var runner = this.root;
        while (runner.left != null){
            runner = runner.left;
        }
        return console.log(`min number ${runner.val}`)
    }

    max(){
        var runner = this.root;
        while (runner.right != null){
            runner = runner.right;
        }
        return console.log(`max number ${runner.val}`)
    }

    size(){
        var total = 0;
        var runner = this.root;
        
        function count(cursor){
            console.log(`The cursor is at value: ${cursor.val}`)
            total++
            console.log(`The total is: ${total}`);
            if (cursor.left){
                count(cursor.left);
            }
            if (cursor.right){
                count(cursor.right);
            }
        }
        if (runner.val){
            console.log(`The cursor is at value: ${runner.val}`)
            total++;
            console.log(`The total is: ${total}`);
        }
        if (runner.left){
            count(runner.left);
        }
        if (runner.right){
            count(runner.right);
        }

        return console.log(`The total # of values is: ${total}`)
    }

    isEmpty(){
        if (this.root){
            return console.log(`${this.name} is not empty`)
        } else {
            return console.log(`${this.name} is empty`)
        }
    }
}
var myTree = new BST("myTree");
myTree.createNode(20)
myTree.createNode(10)
myTree.createNode(15)
myTree.createNode(5)
myTree.createNode(30)
myTree.createNode(25)
myTree.createNode(35)
myTree.min()
myTree.max()
myTree.size()
myTree.isEmpty()






