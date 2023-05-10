// 242. Valid Anagram

var isAnagram = function(s, t) {
  let cache = {} // letter -> count

  for ( let i = 0 ; i < s.length ; i++ ) {
    if ( ! (s[i] in cache) ) cache[s[i]] = 0;
    cache[s[i]]++;
  }

  for ( let i = 0 ; i < t.length ; i++ ) {
    if ( ! (t[i] in cache) ) return false;
    cache[t[i]]--;
    if ( cache[t[i]] < 0 ) return false;
  }

  return true;
};