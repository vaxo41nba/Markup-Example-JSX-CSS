import React from 'react';
import './OneItem.css';

const OneItem = () => {
	return (
		<div className="one-item-container">
			<div id="image-div">
				<div id="heart-icon">
					<img src={require('./images/heart.png')} alt="" />
				</div>
			</div>
			<span>Meyer Sound 1100LFC</span>
			<span>US $8,500</span>
			<span>48 in stock</span>
			<div id="location">
				<img
					src={require('../../BuyersPage/ProductSpecifics/images/location.png')}
					alt=""
				/>
				<span>Solotech, Montreal,CA</span>
			</div>
			<div id="verified">
				<img
					src={require('../../BuyersPage/ProductSpecifics/images/Verified Seller.png')}
					alt=""
				/>
				<span>Verified Seller</span>
			</div>
			<div id="buy-now">
				<span>Buy Now</span>
			</div>
			<div id="make-offer">
				<span>Make an Offer</span>
			</div>
		</div>
	);
};

export default OneItem;
