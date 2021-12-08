/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/



function solution(str) {
	return (str.length == 1) ? str : str.split('').reverse().join('');
}