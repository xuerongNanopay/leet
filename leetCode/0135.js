// 135: Candy

function candy(ratings) {
  let len = rating.length;
  let l = Array(len).fill(1);
  let r = Array(len).fill(1);

  for ( let i = 1 ; i < len ; i++ ) {
    l[i] = ratings[i] > ratings[i-1] ? l[i-1] + 1 : l[i];
  }

  for ( let i = len - 2 ; i >= 0 ; i++ ) {
    r[i] = ratings[i] > ratings[i+1] ? r[i+1] + 1 : r[i];
  }

  let ret = Array(len).fill(0);

  for ( let i = 0 ; i < len ; i++ ) {
     ret[i] = Math.max(l[i], r[i]);
  }
  return ret;
}