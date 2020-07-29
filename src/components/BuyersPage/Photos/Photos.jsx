import React from 'react';
import ImageGallery from 'react-image-gallery';

import Share from '../Share/Share';

const images = [
	{
		original: 'https://picsum.photos/id/1018/1000/600/',
		thumbnail: 'https://picsum.photos/id/1018/250/150/',
		fullscreen: 'https://images2.alphacoders.com/902/902946.png',
	},
	{
		original: 'https://picsum.photos/id/1015/1000/600/',
		thumbnail: 'https://picsum.photos/id/1015/250/150/',
		fullscreen: 'https://picsum.photos/id/1015/1000/600/',
	},
	{
		original: 'https://picsum.photos/id/1019/1000/600/',
		thumbnail: 'https://picsum.photos/id/1019/250/150/',
		fullscreen: 'https://picsum.photos/id/1019/1000/600/',
	},
	{
		original: 'https://picsum.photos/id/1018/1000/600/',
		thumbnail: 'https://picsum.photos/id/1018/250/150/',
		fullscreen: 'https://picsum.photos/id/1018/1000/600/',
	},
	{
		original: 'https://picsum.photos/id/1015/1000/600/',
		thumbnail: 'https://picsum.photos/id/1015/250/150/',
		fullscreen: 'https://picsum.photos/id/1015/1000/600/',
	},
	{
		original: 'https://picsum.photos/id/1019/1000/600/',
		thumbnail: 'https://picsum.photos/id/1019/250/150/',
		fullscreen: 'https://picsum.photos/id/1019/1000/600/',
	},
	{
		original: 'https://picsum.photos/id/1018/1000/600/',
		thumbnail: 'https://picsum.photos/id/1018/250/150/',
		fullscreen: 'https://picsum.photos/id/1018/1000/600/',
	},
	{
		original: 'https://picsum.photos/id/1015/1000/600/',
		thumbnail: 'https://picsum.photos/id/1015/250/150/',
		fullscreen: 'https://picsum.photos/id/1015/1000/600/',
	},
	{
		original: 'https://picsum.photos/id/1019/1000/600/',
		thumbnail: 'https://picsum.photos/id/1019/250/150/',
		fullscreen: 'https://picsum.photos/id/1019/1000/600/',
	},
];

const Photos = () => {
	const addToFavFunc = () => {
		return (
			<div className="addToFav">
				<div>
					<img src={require('./images/heart.png')} alt="" />
					<span id="addToFav">Add to Favorites</span>
				</div>
			</div>
		);
	};

	return (
		<div className="withShare">
			<div className="imageGallery">
				<ImageGallery
					items={images}
					showFullscreenButton={true}
					showNav={false}
					thumbnailPosition="left"
					showPlayButton={false}
					flickThreshold={0}
					renderCustomControls={addToFavFunc}
				/>
			</div>

			<div className="downArrow">
				<div className="white">
					<div className="blue">
						<img src={require('./images/down.png')} alt="" />
					</div>
				</div>
			</div>
			<Share />
		</div>
	);
};

export default Photos;
