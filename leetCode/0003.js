// 3. Longest Substring Without Repeating Characters.

function lengthOfLongestSubstring(s) {
  let seen = {} // key: letter, value: corresponding index.
  // store maximum non-repeat substring to/include current position from left.
  let curMax = Array(s.length).fill(null).map(() => 0);
  // Index 0 is always 1, since only one letter.
  curMax[0] = 1;
  seen[s[0]] = 0;

  for ( let i = 1 ; i < s.length ; i++ ) {
    if ( s[i] in seen ) {
      if ( i - seen[s[i]] <= curMax[i-1] ) {
        // in this case, [i-1] already contain current chat. so needs trim
        curMax[i] = i - seen[s[i]]
      } else {
        curMax[i] = curMax[i-1] + 1;
      }

    } else {
      curMax[i] = curMax[i-1] + 1;
    }

    seen[s[i]] = i;
  }
  console.log(curMax)

  return Math.max(...curMax);
}

let test1 = "abcabcbb";
console.log(lengthOfLongestSubstring(test1));