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

Try to recognize a pattern:

[a, b, d, e, c, f, g]

1.  [root, root.left, root.left.left, root.left.right, root.right, root.right.left, root.right.right]

[d, b, e, a, f, c, g]

2.  [root.left.left, root.left, root.left,right, root, root.right.left, root.right, root.right.right]

*/

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
