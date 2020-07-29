import React from 'react';

const Item = () => {
	return (
		<div className="item-div">
			<div>
				{/* Left Div */}
				<div className="image-div">
					<div className="heart-icon">
						<img src={require('./images/heart.png')} alt="" />
					</div>
				</div>

				{/* Center Div */}
				<div className="item-details">
					<span className="item-title">Meyer Sound 1100LFC</span>
					<span className="item-left">116 in stock</span>
					<br />
					<div className="item-price">
						<span>From: </span>
						<span>US $7,000</span>
					</div>
					<br />
					<img src={require('./images/alert-icon.png')} alt="" />
				</div>
			</div>

			{/* Right Div */}
			<div className="right-div">
				<div>
					<span id="have-one-to-sell">Have one to sell?</span>
				</div>
				<div>
					<span id="view-listing">View Listings (04)</span>
					<br />
					<span id="submit-ad">Submit a 'Gear Finder' Ad</span>
				</div>
			</div>
		</div>
	);
};

export default Item;
