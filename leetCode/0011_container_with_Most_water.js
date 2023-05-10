// 11. Container With Most Water.
var maxArea = function(height) {
  let area = 0;
  let l = 0;
  let r = height.length - 1;
  while ( l < r ) {
    let curArea = Math.min(height[l], height[r]) * (r - l);
    area = Math.max(area, curArea);

    if ( height[l] <= height[r] ) l++;
    else r--;
  }
  return area;
}; 