import React from 'react';

import Photos from './Photos/Photos';
import ProductSpecifics from './ProductSpecifics/ProductSpecifics';
import ThisLotIncludes from './ThisLotIncludes/ThisLotIncludes';

const BuyersPage = () => {
	return (
		<div className="page">
			<div className="product">
				<Photos />
				<ProductSpecifics />
			</div>
			<div className="lot">
				<ThisLotIncludes />
			</div>
		</div>
	);
};

export default BuyersPage;
