function generateHashtag (str) {
  if (str == '') {
    return false;
  }
  
  let arr = str.split(' ');
  let temp = arr.map(function(item) {
    item = item.slice(0, 1).toUpperCase() + item.slice(1);
		return item;
  });
  
  let res = '#' + temp.join('');

  if (res.length === 1 || res.length > 140) {
		return false;
	} else {
		return res;
	}
}

console.log(generateHashtag(" ".repeat(200)));