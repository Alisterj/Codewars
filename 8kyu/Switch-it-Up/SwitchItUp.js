/*When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/


function switchItUp(number) {
	if (number >= 0 && number <= 9) {
		let numbArr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
		return numbArr[number];
	}
	return number;
}