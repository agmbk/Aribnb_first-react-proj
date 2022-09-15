import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, setLocations}) => (
	<>
		<Header setLocations={setLocations}/>
		{children}
		<Footer/>
	</>
);

export default Layout;