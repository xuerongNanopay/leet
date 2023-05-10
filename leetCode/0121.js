// 121. Best Time to Buy and Sell Stock.

function maxProfit(prices) {
  let profit = 0;
  let cost = Number.MIN_SAFE_INTEGER;

  for ( let i = 0 ; i < prices.length ; i++ ) {
    profit = Math.max(profix, prices[i] + cost);
    cost = Math.max(cost, -proces[i]);
  }
  return cost;
}