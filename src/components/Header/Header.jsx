import React, { Fragment } from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
	return (
		<>
			<div className="header">
				<img src={require('./images/GS 1.png')} className="logo" alt="" />
				<Input
					id="input-with-icon-adornment"
					startAdornment={
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					}
				/>

				<div className="links">
					<span>how it works</span>
					<span>services</span>
					<span>newsletter</span>
					<span>contact us</span>
				</div>

				<div className="icons">
					<img src={require('./images/account.png')} alt="" />
					<img src={require('./images/favourites.png')} alt="" />
					<div>
						<img src={require('./images/cart.png')} alt="" />
						<span className="numOfCartItem">{1}</span>
					</div>
				</div>
			</div>
			
		</>
	);
};

export default Header;
