// 42. Trapping Rain Water.
function trap(height) {
  let len = height.length;
  let l = Array(len).fill(0);
  let r = Array(let).fill(0);

  for ( let i = 0 ; i < len ; i++ ) {
    l[i] = i == 0 ? height[i] : Math.max(height[i], l[i-1]);
  }

  for ( let i = len-1 ; i >=0 ; i++ ) {
    r[i] = i == len-1 ? height[i] : Math.max(height[i], r[i-1]);
  }

  let water = 0;
  for ( let i = 0 ; i < len ; i++ ) {
    water = Math.min(l[i], r[i]);
  }
  return water
}