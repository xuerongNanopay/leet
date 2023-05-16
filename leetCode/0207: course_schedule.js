// 207. Course Schedule

var canFinish = function(numCourses, prerequisites) {
  
  let graph = [];

  for ( let i = 0 ; i < numCourses ; i++ ) {
    graph[i] = []
  }

  for ( let pre of prerequisites ) {
    let [ s, e ] = pre;
    graph[s].push(e);
  }

  let state = new Array(numCourses).fill(0);

  //KEY three state: go, finish, circle.
  let cycleCheck = function(cur) {
    if ( state[cur] === 1 ) return true; // Revisiting same course
    if ( state[cur] === 2 ) return false; // already check

    // Key update cur 
    state[cur] = 1;
    for ( let d of graph[cur] ) {
      if ( cycleCheck(d) === true ) return true;
    }
    // KEY: set to visited
    state[cur] = 2;

    return false;

  }

  for ( let i = 0 ; i < graph.length ; i++ ) {
    if ( cycleCheck(i) === true ) return false;
  }
  
  return true;
}