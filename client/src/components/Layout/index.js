import Header from './Header';
import Footer from './Footer';

/**
 *
 * @param children body
 * @param setLocations
 * @return {JSX.Element}
 * @constructor
 */
const Layout = ({children, setLocations}) => (
	<>
		<Header setLocations={setLocations}/>
		{children}
		<Footer/>
	</>
);

export default Layout;
