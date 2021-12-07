//Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

function disariumNumber(n) {
	//your code here
	let nums = String(n).split(''),
		sum = 0;
	for (let i = 0; i < nums.length; i++) {
		sum += Math.pow(nums[i], i + 1);
	}
	return (sum == n ? 'Disarium !!' : 'Not !!')
}
alert(disariumNumber(144));