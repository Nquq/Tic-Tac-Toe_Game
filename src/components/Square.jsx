import React from 'react';

const style = {
	background: 'lightblue',
	border: '2px solid blue',
	fontSize: '100px',
	fontWeight: '600',
	cursor: 'pointer',
	outline: 'none',
};

const Square = ({ onClick, value }) => {
	return (
		<button style={style} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
