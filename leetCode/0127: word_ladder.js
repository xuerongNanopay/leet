// 127. Word Ladder

var ladderLength = function(beginWord, endWord, wordList) {

  //let ret = Number.MAX_SAFE_INTEGER;

  let doCheck = function(s1, s2) {
    if ( s1.length !== s2.length ) return false;

    let check = 0;
    for ( let i = 0 ; i < s1.length ; i++ ) {
      if ( s1[i] !== s2[i] ) check++;
    }

    return check === 1 ? true : false;
  }

  let seen = { [beginWord]: true };
  let queue = [ beginWord ];
  let ret = 0;

  while ( queue.length !== 0 ) {
    ret++;
    let len = queue.length;
    for ( let i = 0 ; i < len ; i++ ) {
      let curWord = queue.shift();
      if ( curWord === endWord ) return ret;

      for ( let word of wordList) {
        if ( (! (word in seen)) && doCheck(word, curWord) ) {
          seen[word] = true;
          queue.push(word)
        }
      }
    }
  }

  return 0;

  // let process = function(cur, count) {
  //   if ( cur === endWord ) {
  //     ret = Math.min(ret, count+1);
  //   }

  //   let len = wordList.length;

  //   for ( let i = 0 ; i < len ; i++ ) {
  //     if ( wordList[i] !== 'xxx' && doCheck(cur, wordList[i]) ) {
  //       let t = wordList[i];
  //       wordList[i] = 'xxx';
  //       process(t, count+1);
  //       wordList[i] = t;
  //     }
  //   }
  // }

  // process(beginWord, 0);

  // return ret === Number.MAX_SAFE_INTEGER ? 0 : ret;
};