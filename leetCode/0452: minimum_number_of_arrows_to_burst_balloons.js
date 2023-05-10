// 452. Minimum Number of Arrows to Burst Balloons

var findMinArrowShots = function(points) {
  // remenber to sort by right bound.
  let sorted = points.sort((p1, p2) => p1[1] - p2[1]);
  console.log(sorted);

  //let [_, right_bound] = sorted[0];
  let right_bound = Number.MIN_SAFE_INTEGER;
  let shot = 0;
  for ( let i = 0 ; i < sorted.length ; i++ ) {
    let [cur_l, cur_r] = sorted[i];

    if ( cur_l > right_bound ) {
      shot++;
      right_bound = cur_r;
    }
  }

  return shot;
};