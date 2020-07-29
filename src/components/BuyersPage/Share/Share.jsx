import React from 'react';

const Share = () => {
	return (
		<div className="share">
			<img src={require('./images/Share_.png')} alt="" />
			<img src={require('./images/facebook.png')} alt="" />
			<img src={require('./images/twitter.png')} alt="" />
			<img src={require('./images/pinterest.png')} className="noMargin" alt="" />
		</div>
	);
};

export default Share;
