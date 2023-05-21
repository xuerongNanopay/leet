// 210. Course Schedule II

var findOrder = function(numCourses, prerequisites) {
  
  let cache_post = Array(numCourses).fill(null).map(_ => []);
  let cache_degree = Array(numCourses).fill(0);

  for ( let p of prerequisites ) {
    const [ pre, cur ] = p;

    cache_post[cur].push(pre);
    cache_degree[pre]++;
  }

  let queue = [];
  cache_degree.forEach((n, index) => {
    if ( n == 0 ) {
      queue.push(index);
    }
  })

  let ret = [];
  while ( queue.length != 0 ) {
    let cur = queue.shift();
    ret.push(cur)

    let posts = cache_post[cur];
    for ( const n of posts ) {
      if ( (--cache_degree[n]) === 0 ) {
        queue.push(n);
      }
    }

  }
  return ret.length === numCourses ? ret : []
};