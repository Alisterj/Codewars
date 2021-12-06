/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)*/


function getSum(a, b) {
	if (a == b) {
		return a;
	}
	let max = Math.max(a, b) + 1,
		sum = 0;
	for (let min = Math.min(a, b); min != max; min++) {
		sum += min;
	}
	return sum;
}
alert(getSum(5, 2));
