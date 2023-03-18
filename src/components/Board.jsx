import React from 'react';
import Square from './Square';

const style = {
	border: '4px solid darkblue',
	borderRadius: '10px',
	width: '500px',
	height: '500px',
	display: 'grid',
	grid: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

const Board = ({ squares, onClick }) => {
	return (
		<div style={style}>
			{squares.map((square, index) => {
				return <Square key={index} value={square} onClick={() => onClick(index)} />;
			})}
		</div>
	);
};

export default Board;
