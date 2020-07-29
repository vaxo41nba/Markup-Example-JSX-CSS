import React from 'react';
import Button from '@material-ui/core/Button';

export const GoToItemPage = () => (
	<Button variant="contained" onClick={() => (window.location.href += 'item')}>
		Click here to open item page
	</Button>
);

export const GoToMainPage = () => (
	<Button variant="contained" onClick={() => (window.location.href = window.location.origin)}>
		Click here to open main page
	</Button>
);
