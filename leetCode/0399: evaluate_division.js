// 99. Evaluate Division

var calcEquation = function(equations, values, queries) {
  var cache = {}; // "a"+ "/"+"n=b" : values.

  for ( let i = 0 ; i < equations.length ; i++ ) {
    let [ s, d ] = equations[i];

    if ( s in cache ) {
      cache[s][d] = values[i];
    } else {
      cache[s] = {};
      cache[s][d] = values[i];
    }

    if ( d in cache ) {
      cache[d][s] = 1 / values[i];
    } else {
      cache[d] = {};
      cache[d][s] = 1 / values[i]
    }
  }
  
  let dfs = function(cur, target, seen, acc) {

    if ( cur === target ) return acc;
    
    let edge = cache[cur];
    for ( let prop in edge ) {
      if ( prop in seen ) continue;
      seen[prop] = true;
      let t = dfs(prop, target, seen, acc*edge[prop]);
      if ( t !== -1 ) return t;
    }

    return -1;
  }

  let ret = [];
  for ( let query of queries ) {
    let [ start, target ] = query;
    if ( ! ( start in cache ) ) {
      ret.push(-1);
      continue;
    }
    let result = dfs(start, target, {start: true}, 1);
    ret.push(result)
  }
  return ret;
};