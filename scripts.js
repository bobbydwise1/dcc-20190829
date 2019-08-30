/*
This problem was asked by Google.

Given pre-order and in-order traversals of a binary tree, write a function to reconstruct the tree.

For example, given the following preorder traversal:

[a, b, d, e, c, f, g]

And the following inorder traversal:

[d, b, e, a, f, c, g]

You should return the following tree:

    a
   / \
  b   c
 / \ / \
d  e f  g

*/

/*

Note it has to be a binary tree.  You can only have at most two children per node.

Assumption1: The binary tree appears to be 'well constructed', ex - all left and right nodes are filled at every level if possible.  The arrays of always of equal length, and contain the same characters (in different arrangements).

Assumption2: Left nodes are always filled first at the same level.

Try to recognize a pattern:

[a, b, d, e, c, f, g]

1.  [root, root.left, root.left.left, root.left.right, root.right, root.right.left, root.right.right]

1.a The major pattern appears to be: parent, parent.left, parent.right

1.b The FIRST element is always the root.

1.c Step by step construction:
1.c.a. The first level construction is: [a,b,c].
1.c.b. If the children have children, it follows them: [a,b,d,e,c]
1.c.c. Next: [a,b,d,e,c,f,g]

[d, b, e, a, f, c, g]

2.  [root.left.left, root.left, root.left,right, root, root.right.left, root.right, root.right.right]

2.a The major pattern appears to be: parent.left, parent, parent.right

2.b The FIRST element is always a bottom-left node.

2.c. Step by step construction:
2.c.a. The first subnode is: [d,b,e]
2.c.b. The parent

*/

class binNode {
  constructor(value=null,left=null,right=null) {
    this.value=value;
    this.left=left;
    this.right=right;
  }

  addLeft(yourLefty) {
    this.left=yourLefty
    return this.left
  }

  addRight(yourRighty) {
    this.right = yourRighty
    return this.right
  }
}

//This function simply makes nodes from an array of strings.  It does not construct a tree.
const makeObjTreeFromArray = (someArray) => {
  let unsortedTree = {}
  let temp;
  for (q = 0; q<someArray.length; q++) {
    unsortedTree['node_'+someArray[q]] = new binNode(someArray[q])
  }
  return unsortedTree;
}

const makeArrayFromArray = (preArray,inOrdArray) => {
  if (preArray.length != inOrdArray.length) {return null}
  let store = makeBinNodesFromArray(preArray)
  return store;
}

let test_pre = ['a','b','d','e','c','f','g']
let test_in = ['d','b','e','a','f','c','g']

let unSortedTree = makeObjTreeFromArray(test_pre)
console.log(unSortedTree)

$(document).ready(function() {
  $('#form1').submit(function(event){
    event.preventDefault()
    let input0 = $('#input-section-0').val()
    console.log(input0)
    let input1 = input0.replace(/'/g,'"')
    let input2 = JSON.parse(input1)
    $('#output-section-0').text(JSON.stringify(input2))

  })
});
