import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import BuyersPage from './components/BuyersPage/BuyersPage';
import ItemPage from './components/ItemPage/ItemPage';
import { GoToItemPage, GoToMainPage } from './components/PageSwitch'

function App() {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<div style={{ width: '333px', margin: 'auto'}}
				>{window.location.pathname === "/" ? <GoToItemPage /> : <GoToMainPage />}</div>
				<Switch>
					<Route exact path="/" component={BuyersPage} />
					<Route path="/item" component={ItemPage} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
