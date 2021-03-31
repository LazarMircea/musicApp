import React, { useState, useEffect } from 'react';
import Card from './Card';
import './CardList.css';

// const navigateToCard = () => {
// 	console.log('......... navigate to card!!!');
// }

const CardList = (props) => {
	const { items = [], onCardClick } = props;
	return (
		<div className='CardListContainer'>
			{items.map(item => (
				<Card
				  cardDetails={item}
					onClick={onCardClick}
				/>
			))

			}
		</div>
	)
};

export default CardList;