// 23. Merge k Sorted Lists


var mergeKLists = function(lists) {
  
  let doMerge = function(l_a, l_b) {
    if ( l_a === null ) return l_b;
    if ( l_b === null ) return l_a;

    if ( l_a.val <= l_b.val ) {
      l_a.next = doMerge(l_a.next, l_b);
      return l_a;
    } else {
      l_b.next = doMerge(l_a, l_b.next);
      return l_b;
    }
  }

  let ans = null;
  for ( let i = 0 ; i < lists.length ; i++ ) {
    ans = doMerge(ans, lists[i]);
  }
  return ans;
};