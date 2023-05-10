// 122. Best Time to Buy and Sell Stock II
function maxProfit(prices) {
  let profit = 0;
  let cost = Number.MIN_SAFE_INTEGER;
  for ( let i = 0 ; i < prices.length ; i++ ) {
    profit = Math.max(profit, prices[i] - cost);
    cost = Math.max(cost, profit - prices[i]);
  }
  return profit;
}