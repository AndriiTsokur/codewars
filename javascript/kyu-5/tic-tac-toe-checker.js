function isSolved(board) {

	// Checking rows
	for (let row of board) {
		if ( (row[0] == row[1] && row[1] == row[2]) && row[0] != 0 ) {
			console.log('Row');
			return row[0];
		}
	}

	// Checking columns
	for (let i = 0; i < board.length; i++) {
		if ( (board[0][i] == board[1][i] && board[1][i] == board[2][i]) && board[0][i] != 0 ) {
			console.log('Column');
			return board[0][i];
		}
	}

	// Checking diagonals
	if ( ((board[0][0] == board[1][1] && board[1][1] == board[2][2]) || (board[0][2] == board[1][1] && board[1][1] == board[2][0])) && board[1][1] != 0 ) {
		console.log('Diagonal');
		return board[1][1];
	}

	for (let row of board) {
		if (row.includes(0)) return -1;
	}

	return 0;
}

console.log(isSolved([
	[0, 0, 1],
	[0, 1, 2],
	[2, 1, 0]
]));