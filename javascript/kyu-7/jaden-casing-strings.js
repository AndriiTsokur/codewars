function func(str) {
	let res = str.split(' ').map(function(item) {
		return item = item.slice(0, 1).toUpperCase() + item.slice(1);
	});
	return res.join(' ');
}

console.log(func("How can mirrors be real if our eyes aren't real"));