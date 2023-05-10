// 88. Merge Sorted Array

function merge(nums1, m, nums2, n) {
  let idx1 = m-1;
  let idx2 = n-1;
  let i = nums1.length-1;
  for ( ; idx1 >= 0 && idx2 >=0 ; ) {
    if ( nums1[idx1] >= nums2[idx2] ) {
      nums1[i] = nums1[idx1];
      idx1--;
      i--;
    } else {
      nums1[i] = nums2[idx2];
      idx2--;
      i--;
    }
  }

  for ( ; idx1 >= 0 ; idx1-- ) {
    nums1[i] = nums1[idx1];
    i--
  }
  for ( ; idx2 >= 0 ; idx2-- ) {
    nums1[i] = nums2[idx2];
    i--
  }

}

let test1 = [1,2,3,0,0,0];
merge(test1, 3, [2,5,6], 3);
console.log(test1);

