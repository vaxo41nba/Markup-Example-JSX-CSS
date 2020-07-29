import React from 'react';

const LotItem = () => {
	return (
		<div className="lot-item">
			<div className="lot-photo-and-description">
				<div className="lot-photo">
					<img src={require('./images/tiger.jpg')} alt="" />
				</div>
				<div className="lot-description">
					<div className="lot-title">
						<span>Meyer 1100LFC</span>
						<span>[See more on Gearsupply]</span>
					</div>
					<span className="lot-category">Category: Subwoofer</span>
					<span className="lot-quantity">Quantity: 12</span>
					<div className="lot-price-and-offer">
						<span className="lot-price">US $7,000</span>
						<span className="lot-offer">Make Partial Offer</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LotItem;
