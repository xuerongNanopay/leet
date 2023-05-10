// 205. Isomorphic Strings
// Two cases:
//  aa    bc
//
//  bc    aa
var isIsomorphic = function(s, t) {
  let cacheS = {}; // cache change: 'a' -> 'k'
  let cacheT = {}
  for ( let i = 0 ; i < s.length ; i++ ) {
    if ( s[i] in cacheS ) {
      if ( cacheS[s[i]] != t[i] ) {
        return false;
      }
    } else if ( t[i] in cacheT ) {
      if ( cacheT[t[i]] != s[i] ) {
        return false;
      }
    } else {
      cacheS[s[i]] = t[i];
      cacheT[t[i]] = s[i]; 
    }
  }
  return true
};