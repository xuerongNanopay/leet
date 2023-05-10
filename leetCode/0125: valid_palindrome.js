// 0125: Valid Palindrome.
var isPalindrome = function(s) {
  let refine = "";
  for ( let i = 0 ; i < s.length ; i++ ) {
    if ( (/[a-zA-Z0-9]/i).test(s[i]) ) {
      refine += s[i].toLowerCase();
    }
  }
  let l = 0;
  let r = refine.length-1;
  console.log(refine);
  while ( l <= r ) {
    if ( refine[l] !== refine[r] ) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};