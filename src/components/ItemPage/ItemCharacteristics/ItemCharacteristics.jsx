import React from 'react';
import './ItemCharacteristics.css';

const ItemCharacteristics = () => {
	return (
		<div className="item-characteristics-container">
			<span id="title">Item Characteristics</span>
			<div>
				<span className="bold">Manufacturer: </span>
				<a href="#">Meyer Sound</a>
				<img src={require('./images/Vector.png')} alt='' />
			</div>
			<div>
				<span className="bold">Model: </span>
				<a href="#">1100LFC</a>
				<img src={require('./images/Vector.png')} alt='' />
			</div>
			<div>
				<span className="bold">Type: </span>
				<a href="#">Subwoofer</a>
				<img src={require('./images/Vector.png')} alt='' />
			</div>
			<div>
				<span className="bold">Category: </span>
				<a href="#">Audio / Subwoofer / 2 X 18"</a>
				<img src={require('./images/Vector.png')} alt='' />
			</div>

			<div>
				<span className="bold">Description: </span>
				<span>
					The 1100‑LFC low-frequency control element is a self-powered
					loudspeaker defined by its sonic linearity in reproducing
					low-frequency transients at high, continuous output levels with
					very low distortion. This ultralow distortion, coupled with
					exceptional headroom and optimized rigging options, makes the
					1100‑LFC a flexible tool for low-end directional applications for
					large-scale tours and installations.
				</span>
			</div>
			<div>
				<span className="bold">Description: </span>
				<span>
					The 1100‑LFC low-frequency control element is a self-powered
					loudspeaker defined by its sonic linearity in reproducing
					low-frequency transients at high, continuous output levels with
					very low distortion. This ultralow distortion, coupled with
					exceptional headroom and optimized rigging options, makes the
					1100‑LFC a flexible tool for low-end directional applications for
					large-scale tours and installations.
				</span>
			</div>
			<div>
				<span className="bold">Description: </span>
				<span>
					The 1100‑LFC low-frequency control element is a self-powered
					loudspeaker defined by its sonic linearity in reproducing
					low-frequency transients at high, continuous output levels with
					very low distortion. This ultralow distortion, coupled with
					exceptional headroom and optimized rigging options, makes the
					1100‑LFC a flexible tool for low-end directional applications for
					large-scale tours and installations.
				</span>
			</div>
			<div>
				<span className="bold">Description: </span>
				<span>
					The 1100‑LFC low-frequency control element is a self-powered
					loudspeaker defined by its sonic linearity in reproducing
					low-frequency transients at high, continuous output levels with
					very low distortion. This ultralow distortion, coupled with
					exceptional headroom and optimized rigging options, makes the
					1100‑LFC a flexible tool for low-end directional applications for
					large-scale tours and installations.
				</span>
			</div>
		</div>
	);
};

export default ItemCharacteristics;
