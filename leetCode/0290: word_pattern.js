// 290. Word Pattern
// Javascript can not pass, because there is a world called "constructor"
var wordPattern = function(pattern, s) {
  let cacheW = {};
  let cacheP = {}

  let words = s.split(" ");
  if ( words.length != pattern.length ) return false;

  for ( let i = 0 ; i < words.length ; i++ ) {
    if ( words[i] in cacheW ) {
      if ( cacheW[words[i]] !== pattern[i] ) {
        return false;
      }
    } else if ( pattern[i] in cacheP ) {
      if ( cacheP[pattern[i]] !== words[i] ) {
        return false;
      }
    } else {
      cacheW[words[i]] = pattern[i];
      cacheP[pattern[i]] = words[i];
    }
  }
  return true;
};