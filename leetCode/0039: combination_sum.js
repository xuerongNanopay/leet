// 39. Combination Sum

var combinationSum = function(candidates, target) {

  let ret = [];

  let process = function(sum, start, tmp) {
    if ( sum > target ) return;
    if ( sum === target ) {
      console.log(tmp)
      ret.push([...tmp]);
      return;
    }

    for ( let i = start ; i < candidates.length ; i++ ) {
      let cur = candidates[i];
      sum += cur;
      tmp.push(cur);
      process(sum, i, tmp)
      tmp.pop();
      sum -= cur;
    }
  }

  process(0, 0, []);
  return ret;
};