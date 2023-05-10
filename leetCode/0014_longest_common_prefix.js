var longestCommonPrefix = function(strs) {
  if ( strs.length < 1 ) return "";

  for ( let i = 0 ; i < strs[0].length ; i++ ) {
    for ( let j = 0 ; j < strs.length ; j++ ) {
      // Check length and validate chat
      if ( strs[0][i] != strs[j][i] || i == strs[j].length ) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
}; 