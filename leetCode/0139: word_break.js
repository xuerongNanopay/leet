// 139. Word Break

var wordBreak = function(s, wordDict) {
  let cache = {};
  for ( let word of wordDict ) {
    cache[word] = true;
  }
  
  var doSearch = (s) => {
    if ( s in cache ) return cache[s];

    for ( let i = 1 ; i < s.length ; i++ ) {
      let pre = s.substring(0, i);
      let post = s.substring(i);
      if ( cache[pre] && doSearch(post) ) {
        cache[s] = true;
        return true;
      }
    }
    cache[s] = false;
    return false;
  }

  return doSearch(s)
};
