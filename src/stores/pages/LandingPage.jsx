import { React } from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import FooterPage from '../pages/FooterPage';
const LandingPage = () => {
    return ( 
        <div>
            <Navbar/>
            <Products/>
            <FooterPage/>
        </div>
     );
}
 
export default LandingPage;