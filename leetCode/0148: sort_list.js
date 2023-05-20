// 148. Sort List

var sortList = function(head) {
  if ( head === null ) return head;
  let arr = [];

  let cur = head;

  for ( ; cur != null; cur = cur.next ) {
    arr.push(cur.val);
  }

  let doMerge = function(l, mid, r) {
    let l_size = mid - l + 1;
    let r_size = r - mid;
    let len = r - l + 1;

    let l_arr = new Array(l_size).fill(0);
    let r_arr = new Array(r_size).fill(0);
    let tmp = [];

    for ( let i = 0 ; i < l_size ; i++ ) {
      l_arr[i] = arr[l+i];
    }

    for ( let i = 0 ; i < r_size ; i++ ) {
      r_arr[i] = arr[mid+i+1];
    }

    for ( ; l_arr.length !== 0 && r_arr.length !== 0 ; ) {
      if ( l_arr[0] < r_arr[0] ) {
        tmp.push(l_arr.shift());
      } else {
        tmp.push(r_arr.shift());
      }
    }

    for ( ; l_arr.length !== 0 ; ) {
      tmp.push(l_arr.shift());
    }

    for ( ; r_arr.length !== 0 ; ) {
      tmp.push(r_arr.shift());
    }

    for ( let i = 0 ; i < len ; i++ ) {
      arr[i+l] = tmp[i];
    }
  }

  let sort = function(l, r) {
    if ( l < r ) {
      let mid = l + Math.trunc((r-l)/2);

      sort(l, mid);
      sort(mid+1, r)
      doMerge(l, mid, r);
    }
  }

  sort(0, arr.length-1);
  console.log(arr)

  let newHead = new ListNode(arr.shift(), null);
  cur = newHead;
  for ( ; arr.length !== 0 ; ) {
    cur.next = new ListNode(arr.shift(), null);
    cur = cur.next;
  }
  return newHead;
};