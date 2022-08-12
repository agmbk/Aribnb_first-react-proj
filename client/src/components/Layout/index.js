import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => (
	<>
	
				<Header/>
			
<div style={{position: 'relative', marginTop: 'inherit'}}>
			{children}
</div>
			<div className="fixed-bottom">
				<Footer/>
			</div>
	</>
);

export default Layout;