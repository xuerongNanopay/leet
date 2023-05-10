// 49. Group Anagrams

// Key: sorted each words. cache: key with sorted words.
var groupAnagrams = function(strs) {
  let sorted = strs.map(a => a.split('').sort().join(''));
  let map = {};
  for ( let i = 0 ; i < sorted.length ; i++ ) {
    map[strs[i]] = sorted[i];
  } 

  let cache = {};
  for ( let i = 0 ; i < strs.length ; i++ ) {
    if ( ! (map[strs[i]] in cache) ) cache[map[strs[i]]] = [];
    cache[map[strs[i]]].push(strs[i]);
  }
  ret = []
  for ( let key in cache ) {
    ret.push(cache[key]);
  }
  return ret;
};