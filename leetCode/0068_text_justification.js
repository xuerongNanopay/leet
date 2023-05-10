//68. Text Justification.

var fullJustify = function(words, maxWidth) {
  let tmp = [[]];
  let cur = 0;
  let remain = maxWidth;
  let cache = {}; //index -- total words length

  for ( let i = 0 ; i < words.length ; i++ ) {
    if ( words[i].length > remain ) {
      tmp.push([]);
      cur++;
      tmp[cur].push(words[i]);
      remain = maxWidth - words[i].length - 1;
    } else {
      tmp[cur].push(words[i]);
      remain = remain - words[i].length - 1;
    }
    if ( ! (cur in cache) ) cache[cur] = 0;
    cache[cur] += words[i].length;
  }

  let format = [];

  for ( let i = 0 ; i < tmp.length ; i++ ) {
    let wordCount = tmp[i].length;
    let spaceCount = maxWidth - cache[i];
    let space = wordCount == 1 ? 0 : Math.floor(spaceCount / (wordCount - 1));
    let extraSpace = wordCount == 1 ? 0 : spaceCount - space * (wordCount-1);
    let sb = tmp[i][0];
    console.log(space, extraSpace, tmp[i])
    for ( let j = 1 ; j < tmp[i].length ; j++ ) {
      if ( i == tmp.length - 1 ) {
        sb = sb + " " + tmp[i][j];
        continue;
      }
      sb = sb + " ".repeat(space + (extraSpace > 0 ? 1 : 0)) + tmp[i][j];
      extraSpace--;
    }
    if ( sb.length != maxWidth ) {
      sb = sb + ' '.repeat(maxWidth-sb.length)
    }
    format.push(sb);
  }
  return format;
};