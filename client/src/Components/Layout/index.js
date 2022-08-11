import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Header'

const Layout = ({  children}) => (
	<Router>
		<div style={{height: 'auto', overflow: 'auto'}}>
			<div className="fixed-top">
				<Header />
			</div>
			{ children }
			<div className="fixed-bottom">
			</div>
		</div>
	</Router>
);

export default Layout