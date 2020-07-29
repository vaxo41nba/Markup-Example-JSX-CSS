import React from 'react';

const ProductSpecifics = () => {
	return (
		<div className="product-specifics-container">
			<span className="product-title">Meyer Leo/1100LFC Turn-Key PKG</span>
			<span className="inStock">In Stock</span>
			<div className="location">
				<img src={require('./images/location.png')} alt="" />
				<span>PSAV, New York, NY</span>
			</div>

			<div className="store-rating">
				<img src={require('./images/store-logo.png')} alt="" />
				<div className="stars-reviews-container">
					<div className="stars-reviews">
						<span>★★★★★</span>
						<span className="reviews-count">180 reviews</span>
					</div>
					<span className="visit-link">[Visit PSAV store]</span>
				</div>
			</div>
			<div className="verified-seller">
				<img src={require('./images/Verified Seller.png')} alt="" />
				<span>Verified Seller</span>
			</div>
			<div className="quantity">
				<span>Quantity</span>
				<input type="number" defaultValue="1" min="1" />
			</div>
			<span className="price">US $282,584</span>
			<div className="gear-promise">
				<img src={require('./images/gear-promise.png')} alt="" />
				<span>We guarantee a safe transaction</span>
			</div>
			<div className="buy-now">
				<span>Buy Now</span>
			</div>
			<div className="make-offer">
				<span>Make an Offer</span>
			</div>
			<span className="description">
				Meyer Leo Turnkey Package – NEVER TOURED <br /> Ready for action and
				perfect for large-scale events in stadiums, arenas, theaters. System
				has all SMAART traces, and has always been tested before and after
				shows. We provide attractive touring packages and supplementary
				rental options to artists, tour managers and event organizers
				throughout US, Europe, Australia, New Zealand and Asia.
			</span>
			<div className="accessories">
				<span>Accessories:</span>
				<div className="accessories-list">
					<div className="accessory">
						<img src={require('./images/bullet.png')} alt="" />
						<span>4 Meyer LEO MG</span>
					</div>
					<div className="accessory">
						<img src={require('./images/bullet.png')} alt="" />
						<span>Complete Cable PKG</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductSpecifics;
