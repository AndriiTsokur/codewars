let testString = "ATTGC";
let dna = '';

for (i = 0; i < testString.length; i++) {
	if (testString[i] === 'A') {
		dna += 'T';
	} else {
		if (testString[i] === 'T') {
			dna += 'A';
		} else {
			if (testString[i] === 'G') {
				dna += 'C';
			}
			else {
				dna += 'G'
			}
		}
	}
}

console.log(dna);