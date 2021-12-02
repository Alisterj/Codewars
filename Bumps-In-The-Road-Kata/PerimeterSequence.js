/*The first three stages of a sequence are shown.
The blocksize is a by a and a ≥ 1.

What is the perimeter of the nth shape in the sequence (n ≥ 1) ?*/



//One trial

function perimeterSequenceOne(a, n) {
	return ((n == 1) ? (a * 4) : ((a * n * 2) + (n * 2 * a)));
}
alert(perimeterSequenceOne(2, 3)); //Examination

//Two trial

function perimeterSequence(a, n) {
	if (n == 1) {
		return (a * 4);
	} else {
		return ((a * n * 2) + (n * 2 * a)); // P
	}
}
alert(perimeterSequence(2, 3)); //Examination