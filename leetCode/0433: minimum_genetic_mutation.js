// 433. Minimum Genetic Mutation

var minMutation = function(startGene, endGene, bank) {

  let letters = ['A', 'C', 'G', 'T'];
  let start = startGene.split("");
  let cache = bank.reduce((pre, cur) => { pre[cur] = true; return pre; }, {})

  let queue = [ start ]
  let step = 0;
  while ( queue.length !== 0 ) {
    ++step;
    let len = queue.length;

    for ( let z = 0 ; z < len ; z++ ) {
      let curWord = queue.shift();
      for ( let i = 0 ; i < curWord.length ; i++ ) {
        let tmp = curWord[i];
        for ( let l of letters ) {
          if ( l === tmp ) continue;
          curWord[i] = l;
          let nextWord = curWord.join("");
          console.log(nextWord, endGene)
          if ( nextWord === endGene ) return step;

          if ( nextWord in cache ) {
            queue.push(nextWord.split(""))
            delete cache[tmp];
          }
        }
        curWord[i] = tmp;
      }
    }
  }
  return -1;
};