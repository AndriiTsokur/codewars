function alphanumeric(string){
  let allowed = '0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz'.split('');
	let test = string.split('');
	let res = true;

	if (string.length === 0) {
		res = false;
	} else {
		for (let symbol of test) {
			if (allowed.includes(symbol) === false) {
				res = false;
			}
		}
	}
	
	return res;
}

console.log(alphanumeric(''));