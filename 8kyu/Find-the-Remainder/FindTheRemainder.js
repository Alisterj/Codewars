/*Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.*/


function remainder(a, b) {
	// Divide the larger argument by the smaller argument and return the remainder
	//   if(a == 0 || b == 0) return NaN;
	return ((a == 0 || b == 0) ? NaN : Math.max(a, b) % Math.min(a, b));
}