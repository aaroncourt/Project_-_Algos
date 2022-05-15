// Display
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

class SLL {
    // constructor, other methods, removed for brevity
    display() {
    	// neatly display nodes in my list
        var node_string = ''
        var count = 1
        var runner = this.head
        while (runner != null){
            node_string = (`${node_string}` + `Node ${count}: ${runner.data}\n` )
            count++
            runner = runner.next
        }
        return console.log(node_string)
    }
}

SLL.display()