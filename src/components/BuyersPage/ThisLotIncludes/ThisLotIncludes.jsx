import React from 'react';

import LotItem from '../LotItem/LotItem';

const ThisLotIncludes = () => {
	return (
		<div className="this-lot-includes-container">
			<span className="include">This lot includes:</span>
			<div>
				<LotItem />
			</div>
			<div>
				<LotItem />
			</div>
			<div>
				<LotItem />
			</div>
		</div>
	);
};

export default ThisLotIncludes;
