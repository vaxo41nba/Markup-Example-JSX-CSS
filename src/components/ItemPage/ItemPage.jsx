import React from 'react';

import Item from './Item/Item';
import ItemUsedInOtherLots from './ItemUsedInOtherLots/ItemUsedInOtherLots';
import ItemCharacteristics from './ItemCharacteristics/ItemCharacteristics';

const ItemPage = () => {
	return (
		<div className="item-page">
			<div className="item">
				<Item />
			</div>
			<div className="item-used-in-other-lots">
				<ItemUsedInOtherLots />
			</div>
			<div className="item-characteristics">
				<ItemCharacteristics />
			</div>
		</div>
	);
};

export default ItemPage;
