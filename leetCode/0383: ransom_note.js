// 383. Ransom Note

var canConstruct = function(ransomNote, magazine) {
  let cache = {}

  for ( let i = 0 ; i < magazine.length ; i++ ) {
    if ( !(magazine[i] in cache) ) cache[magazine[i]] = 0;
    cache[magazine[i]]++;
  }

  for ( let i = 0 ; i < ransomNote.length ; i++ ) {
    if ( ! (ransomNote[i] in cache) ) return false;
    cache[ransomNote[i]]--; 
    if ( cache[ransomNote[i]] < 0 ) return false;
  }

  return true;
};