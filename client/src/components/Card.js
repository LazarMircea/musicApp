import React, { useState, useEffect } from 'react';
import './Card.css';

// const navigateToCard = () => {
// 	console.log('......... navigate to card!!!');
// }

const Card = (props) => {
	const { cardDetails = {} } = props;
	console.log('<><><>    cardDetails: ', cardDetails);
	return (
		<div className='CardContainer'>
			<h1>{cardDetails.genre}</h1>
			<h5>{cardDetails.totalSongs} songs</h5>
		</div>
	)
};

export default Card;