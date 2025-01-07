import React from 'react';
import Navbar from '../components/Navbar'
const FooterPage = () => {
    return ( 
        <footer>
            <div className="foot-panel1">Back to top</div>
            <div className="foot-panel2">
                <ul>
                    <p>Get to Know Us</p>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Press Releases</a>
                    <a href="#">E-Mart Science</a>
                </ul>
                <ul>
                    <p>Connect with Us</p>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </ul>
                <ul>
                    <p>Make Money with Us</p>
                    <a href="#">Sell on E-Mart</a>
                    <a href="#">Sell under E-Mart Accelerator</a>
                    <a href="#">Protect and Build Your Brand</a>
                    <a href="#">E-Mart Global Selling</a>
                    <a href="#">Become an Affiliate</a>
                    <a href="#">Fulfilment by E-Mart</a>
                    <a href="#">Advertise Your Products</a>
                    <a href="#">E-Mart Pay on Merchants</a>
                </ul>
                <ul>
                    <p>Let Us Help You</p>
                    <a href="#">COVID-19 and E-Mart</a>
                    <a href="#">Your Account</a>
                    <a href="#">Returns Centre</a>
                    <a href="#">Recalls and Product Safety Alerts</a>
                    <a href="#">100% Purchase Protection</a>
                    <a href="#">E-Mart App Download</a>
                    <a href="#">Help</a>
                </ul>
            </div>
            <div className="foot-panel3">
                <div className="logo-footer"></div>
                <div className="logo-panel1">
                    <div className="footer-button1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f4f7fa" d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
                        
                        <select className="lan">
                            <option>English</option>
                        </select>
                    </div>
                    <div className="footer-button2"> 
                        <img width="28" height="28" src="https://img.icons8.com/color/28/india.png" className="india" alt="India"/>
                        <p style={{ marginLeft: '3px' }}>India</p>
                    </div>
                </div>
            </div>
            <div className="foot-panel4">
                <div className="pages">
                    <p className="pcontent">Conditions of Use & Sale</p>
                    <p className="pcontent">Privacy Notice</p>
                    <p className="pcontent">Interest-Based Ads</p>
                </div>
                <div className="copy-rights">
                    <p>&copy;  E-Mart.com, Inc. or its affiliates</p>
                </div>
            </div>
        </footer>
    );
}
 
export default FooterPage;