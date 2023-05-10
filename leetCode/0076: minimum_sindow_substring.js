var minWindow = function(s, t) {
  let l = 0;
  let cache = {};
  let tmpCache = {};
  let total = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for ( let i = 0 ; i < t.length ; i++ ) {
    if ( ! (t[i] in cache) ) cache[t[i]] = 0;
    if ( ! (t[i] in tmpCache) ) tmpCache[t[i]] = 0;
    cache[t[i]]++;
    tmpCache[t[i]] = 0;
  }

  let ret = "";
  for ( let i = 0 ; i < s.length ; i++ ) {
    if ( s[i] in cache ) {
      tmpCache[s[i]]++;
      if ( tmpCache[s[i]] <= cache[s[i]] ) {
        total++
      }
    }

    while ( ((!(s[l] in tmpCache)) || tmpCache[s[l]] > cache[s[l]] ) && l <= i) {
      if ( s[l] in tmpCache ) tmpCache[s[l]]--;
      l++;
    }

    if (total == t.length) {
      if ( i - l + 1 < min ) {
        ret = s.substring(l, i+1);
        min = i - l + 1
      }
    }
  }

  return ret
};