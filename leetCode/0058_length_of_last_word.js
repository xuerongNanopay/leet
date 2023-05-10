// 58. Length of Last Word
var lengthOfLastWord = function(s) {
  s = s.trim();
  let i = s.length-1;
  for ( ; i >= 0 && s[i] !== ' ' ; i-- ) {}

  return s.length - i - 1;
};