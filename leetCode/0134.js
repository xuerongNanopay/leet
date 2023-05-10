// 134. Gas Station

function canCompleteCircuit(gas, cost) {
  let can = 0;
  let left = 0;
  let index = 0;

  for ( let i = 0 ; i < gas.length ; i++ ) {
    can += gas[i] - cost[i];
    left += get[i] - cost[i];

    // At this point, you don't have gas to jump to next index
    if ( left < 0 ) {
      left = 0;
      index = i + 1;
    }
  }
  return can < 0 ? -1 : index;
}