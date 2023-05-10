var findSubstring = function(s, words) {
  let step = words[0].length;
  let cache = {};
  let tmpCache = {};

  for ( let i = 0 ; i < words.length ; i++ ) {
    if ( ! (words[i] in cache) ) cache[words[i]] = 0; 
    if ( ! (words[i] in tmpCache) ) tmpCache[words[i]] = 0; 
    cache[words[i]] += 1;
    tmpCache[words[i]] = 0;
  }

  let ret = [];
  for ( let i = 0 ; i <= s.length - step ; i++ ) {
    let j = i;
    for ( ; j < i + words.length * step ; j+=step ) {
      let sub = s.substring(j, j+step);
      if ( ! (sub in tmpCache) ) break;
      tmpCache[sub] += 1;
      if ( tmpCache[sub] > cache[sub] ) break;
    }
    if ( j-i == words.length * step ) ret.push(i);
    for ( let key in tmpCache ) {
      tmpCache[key] = 0;
    }
  }
  return ret;
    
};