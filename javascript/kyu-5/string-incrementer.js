function incrementString (strng) {
	let sample = '0123456789';
	let numberPart = ''; let stringPart = '';

	strng = strng.split('');

	for (let i = strng.length - 1; sample.indexOf(strng[i]) != -1; i--) {
		numberPart = strng[i] + numberPart;
	}

	numberPart == '' ? stringPart = strng.join('') : stringPart = strng.slice(0, -numberPart.length).join(''); 

	let startZero = (numberPart.indexOf('0') === 0);
	let initNumLength = numberPart.length;
	numberPart = (+numberPart + 1).toString();

	if (initNumLength > numberPart.length && startZero === true) {
		for (let i = initNumLength - numberPart.length; i > 0; i--) {
			numberPart = '0' + numberPart;
		}
	}

	return stringPart + numberPart;
}

console.log(incrementString('foo099'));