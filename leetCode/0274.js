// 274. H-Index
// The question and example comfuse people
function hIndex(citations) {
  let sorted = citations.sort((a, b) => a-b);
  let len = citations.length;

  for ( let i = 0 ; i < len ; i++ ) {
    //Hint: using index as counter.
    if ( sorted[i] >= len - i ) {
      return len - i;
    } 
  }
  return 0;
}