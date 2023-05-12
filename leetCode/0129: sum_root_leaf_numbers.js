// 129. Sum Root to Leaf Numbers

var accaaa = 0;
var sumNumbers = function(root) {
  console.log('aaa', accaaa);
  // I don't know whay accaaa being assign 25 before this line of code
  accaaa = 0;
  cal(root, 0);
  return accaaa;
};

var cal = function(root, num) {
  if ( root === null ) return;
  if ( root.left === null && root.right === null ) {
    accaaa = accaaa + (num*10 + root.val);
    return;
  }

  let tmp = num*10 + root.val;
  cal(root.left, tmp);
  cal(root.right, tmp);
}