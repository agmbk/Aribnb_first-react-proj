import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children, addElement}) => (
	<>
		<Header addElement={addElement}/>
		
		<div style={{position: 'relative', marginTop: 'inherit'}}>
			{children}
		</div>
		
		<Footer/>
	
	</>
);

export default Layout;