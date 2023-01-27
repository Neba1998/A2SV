/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let result = 0
	let n = 1
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] === prices[i + 1] + 1) n++
		else {
			result += (n * (n + 1)) / 2
			n = 1
		}
	}
	return result
};
