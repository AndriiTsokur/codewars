const names = ["Alex", "Jacob", "Mark", "Max", "Andrew"];

switch (names.length) {
	case 0:
		resume = 'no one likes this';
		break;
	case 1:
		resume = `${names[0]} likes this`;
		break;
	case 2:
		resume = `${names[0]} and ${names[1]} like this`;
		break;
	case 3:
		resume = `${names[0]}, ${names[1]} and ${names[2]} like this`;
		break;
	default:
		resume = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
		break;
}

console.log(resume);