import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, addElement}) => (
	<>
		<Header addElement={addElement}/>
		{children}
		<Footer/>
	</>
);

export default Layout;