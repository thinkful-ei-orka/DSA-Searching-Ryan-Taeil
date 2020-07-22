const BinarySearchTree = require('./binarySearchTree');

function treeTraversals() {
  const BST = new BinarySearchTree();

  BST.insert(25);
  BST.insert(15);
  BST.insert(50);
  BST.insert(10);
  BST.insert(24);
  BST.insert(35);
  BST.insert(70);
  BST.insert(4);
  BST.insert(12);
  BST.insert(18);
  BST.insert(31);
  BST.insert(44);
  BST.insert(66);
  BST.insert(90);
  BST.insert(22);

  console.log('preOrder()');
  BST.dfsPreOrder();
  console.log('inOrder()');
  BST.dfsInOrder();
  console.log('postOrder()');
  BST.dfsPostOrder();
}

function nextCommandingOfficer(tree, nextTrees = []) {
  // do the current tree / node
  console.log(tree);

  // if next trees are queued up, prioritize those before this node's trees
  if (nextTrees.length) {
    if (tree.left) {
      nextTrees.push(tree.left);
    }
    if (tree.right) {
      nextTrees.push(tree.right);
    }
    let nextTree = nextTrees.shift(); // remove first item and run it as the next tree
    nextCommandingOfficer(nextTree, nextTrees);
  }

  // if there are no next trees, run from this node prioiritizing the left side.
  if (tree.left && tree.right) {
    nextCommandingOfficer(tree.left, [tree.right]);
  } else if (tree.left) {
    nextCommandingOfficer(tree.left);
  } else if (tree.right) {
    nextCommandingOfficer(tree.right);
  }
}

function maxProfit(sharePrices) {
  let maxProfit = 0;

  // Option 1: brute force through the array.
  // for (let i = 0; i < sharePrices.length; i++) {
  // }
  // note: Option 1 and Option 2 probably have the same run time... (I didn't write option 1)

  // Option 2: Convert array into an array of differences
  // [128, 97, 121, 123, 98, 97, 105] would turn into [31, -24, -2, 25, 1, -8]
  // Find the largest set of consecutive values
  let sums = [];
  for (let i = 0; i < sharePrices.length; i++) {
    if (i === 0) {
      // do nothing
    } else {
      sums.push(sharePrices[i - 1] - [sharePrices[i]]);
    }
  }

  let maxSums = [];
  for (let j = 0; j < sums.length; j++) {
    if (maxSums[j] === undefined) {
      maxSums[j] = [sums[j], true]; // if true, sum is continuing
    } else if (maxSums[j][1]) {
      if (maxSums[j] + sums[j] > maxSums[j][0]) {
        maxSums[j] = maxSums[j] + sums[j];
      } else {
        maxSums[j][1] = false;
      }
    }
  }

  // convert array of max sums and booleans into just max sums
  let newMaxSums = [];
  maxSums.forEach((value) => {
    newMaxSums.push(value[0]);
  })

  return Math.max(...newMaxSums);
}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));
console.log(maxProfit([128, 97, 121, 123, 50, 97, 105]));


function eggDrop() {
  // optional
}
