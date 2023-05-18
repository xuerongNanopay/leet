// 17. Letter Combinations of a Phone Number

var letterCombinations = function(digits) {
  if ( digits === "" ) return [];
  let len = digits.length;
  let tmp = [];
  let arr = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let ret = [];

  let backtrack = function(tmp, digits, idx) {
    if ( idx === len ) {
      ret.push(tmp.join(""));
      return;
    }

    let letters = arr[digits[idx]];
    console.log(idx, digits[idx], letters)
    for ( let i = 0 ; i < letters.length ; i++ ) {
      tmp.push(letters[i]);
      backtrack(tmp, digits, idx+1);
      tmp.pop();
    }
  }

  backtrack(tmp, digits, 0);
  return ret;
};