// 211. Design Add and Search Words Data Structure

function Node(val) {
  this.val = val
  this.nexts = Array(26).fill(null)
  this.isWord = false
}

var WordDictionary = function() {
  this.head = new Node("")
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let cur = this.head
  for ( let i = 0 ; i < word.length ; i++ ) {
    let char = word[i]
    let charIndex = char.charCodeAt(0) - 97
    if ( cur.nexts[charIndex] === null ) cur.nexts[charIndex] = new Node(char)
    cur = cur.nexts[charIndex]
  } 
  cur.isWord= true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
// I think doing recursive in find.
WordDictionary.prototype.search = function(word) {

  const doSearch = (head, word) => {
    if ( word.length === 0 ) return false;
    if ( word.length === 1 ) {
      if ( word === "." ) {
        for ( let i = 0 ; i < 26 ; i++ ) {
          if ( head.nexts[i] !== null && head.nexts[i].isWord ) return true;
        }
        return false;
      } else {
        let char = word[0];
        let charIndex = char.charCodeAt(0) - 97
        return head.nexts[charIndex] !== null && head.nexts[charIndex].isWord ? true : false;
      }   
    }

    let char = word[0];
    let charIndex = char.charCodeAt(0) - 97
    if ( char === "." ) {
      for ( let i = 0 ; i < 26 ; i++ ) {
        if ( head.nexts[i] !== null && doSearch(head.nexts[i], word.substring(1)) ) return true;
      }
      return false;
    } else {
      if ( head.nexts[charIndex] === null ) return false;
      else return doSearch(head.nexts[charIndex], word.substring(1));
    }
    
  }
  return doSearch(this.head, word)
};
