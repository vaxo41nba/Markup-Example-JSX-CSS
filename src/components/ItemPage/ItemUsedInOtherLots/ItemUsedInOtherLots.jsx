import React from 'react';

import OneItem from './OneItem';

const ItemUsedInOtherLots = () => {
	return (
		<div className="item-used-in-other-lots-container">
			<span>This item is used in other lots</span>
			<div>
				<OneItem />
				<OneItem />
				<OneItem />
				<OneItem />
				<OneItem />
				<OneItem />
				<OneItem />
			</div>
		</div>
	);
};

export default ItemUsedInOtherLots;
