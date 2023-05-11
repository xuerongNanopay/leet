// 21. Merge Two Sorted Lists


var mergeTwoLists = function(list1, list2) {
  if ( list1 == null ) return list2;
  if ( list2 == null ) return list1;
  let tmp1 = list1;
  let tmp2 = list2;
  let tmp = null;
  let ret = null;

  while ( tmp1 != null && tmp2 != null ) {
    if ( tmp1.val < tmp2.val ) {
      if ( ret == null ) {
        ret = tmp1;
        tmp = ret;
      } else {
        ret.next = tmp1;
        ret = ret.next;
      }
      tmp1 = tmp1.next;
    } else {
      if ( ret == null ) {
        ret = tmp2;
        tmp = ret;
      } else {
        ret.next = tmp2;
        ret = ret.next;
      }
      tmp2 = tmp2.next;
    }
  }

  ret.next = tmp1 === null ? tmp2 : tmp1;
  return tmp
};