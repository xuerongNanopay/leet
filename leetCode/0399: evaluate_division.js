//TODO: unfinish because I am tired to do it.

var calcEquation = function(equations, values, queries) {
  var seen = {}; // "a"+ "/"+"n=b" : values.

  var stack = [];

  for ( let i = 0 ; i < equations.length ; i++ ) {
    let [ s, d ] = equations[i];

    if ( s in seen ) {
      seen[s][d] = values[i];
    } else {
      seen[s] = {};
      seen[s][d] = values[i];
    }

    if ( d in seen ) {
      seen[d][s] = 1 / values[i];
    } else {
      seen[d] = {};
      seen[d][s] = 1 / values[i]
    }
  }

  let dfs = function(start, target) {
    let queue = [start];
    let 

    while ( queue.length !== 0 ) {

    }
  }

  let ret = [];
  for ( let query of queries ) {
    let [ s, d ] = query;

  }

  console.log(seen);
  
};