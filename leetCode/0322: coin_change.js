// 322. Coin Change

var coinChange = function(coins, amount) {
  let cache = Array(amount+1).fill(0);
  cache.fill(amount+1, 1)

  console.log(cache)
  for ( let coin of coins ) {
    for ( let i = coin ; i <= amount ; i++ ) {
      cache[i] = Math.min(cache[i], cache[i-coin] + 1);
    }
  }
  return cache[amount] === amount+1 ? -1 : cache[amount]
};