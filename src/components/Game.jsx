import React, { useState } from 'react';
import { calculateWinner } from '../helper.js';
import Board from './Board';

const styledDiv = {
	width: '190px',
	height: '400px',
};

const styledButton = {
	padding: '10px',
	marginTop: '10px',
};

const styledP = {
	fontSize: '30px',
	fontWeight: '500',
};

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = index => {
		const boardCopy = [...board];

		if (winner || boardCopy[index]) return;

		boardCopy[index] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXisNext(!xIsNext);
	};

	const resetGame = () => {
		return (
			<button style={styledButton} onClick={() => setBoard(Array(9).fill(null))}>
				Reset Game
			</button>
		);
	};

	return (
		<>
			<Board squares={board} onClick={handleClick} />
			<div style={styledDiv}>
				<p style={styledP}>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</p>
				{resetGame()}
			</div>
		</>
	);
};

export default Game;
