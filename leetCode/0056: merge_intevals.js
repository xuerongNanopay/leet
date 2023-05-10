// 56. Merge Intervals.

var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0]- b[0])
  let ret = [];

  for ( let interval of intervals ) {
    console.log(ret)
    if ( ret.length == 0 ) {
      ret.push(interval);
      continue;
    };
    const [merge_l, merge_r] = interval;
    const [tail_l, tail_r] = ret.pop();

    if ( merge_r <= tail_r ) ret.push([tail_l, tail_r]);
    else if ( merge_l <= tail_r ) ret.push([tail_l, merge_r]);
    else {
      ret.push([tail_l, tail_r]);
      ret.push([merge_l, merge_r]);
    }
  }
  return ret;
};