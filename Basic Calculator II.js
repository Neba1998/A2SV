/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
   const calculator = s.match(/(\d+)|[+-/*]/g);
	const addition = [+calculator.shift()];
	const operator = {
		'+': (num) => addition.push(num),
		'-': (num) => addition.push(-num),
		'*': (num) => addition.push(addition.pop() * num),
		'/': (num) => addition.push(addition.pop() / num | 0),
	};

	calculator.forEach((str, index) => operator[str]?.(+calculator[index + 1]));
	return addition.reduce((result, num) => result + num); 
};
