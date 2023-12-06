import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill } from '@react-icons/all-files/ri/RiFacebookCircleFill';
import { GrLinkedin } from '@react-icons/all-files/gr/GrLinkedin';
import { RiYoutubeFill } from '@react-icons/all-files/ri/RiYoutubeFill';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';


const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer">

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span>Aum Prasad Casting</span>
                            </a>
                            <p>Aluminium Gravity Die casting Foundry with special focus to cater to the requirements of Automotive  , Non Automotive segment, Electrical Industry and the Export market.</p>
                            <div className="social-links d-flex mt-4">
                                {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a> */}
                                {/* <a href="#" className="instagram"><i className="bi bi-instagram"></i></a> */}
                                <a href="https://www.facebook.com/" className="facebook"><RiFacebookCircleFill /></a>
                                <a href="https://www.linkedin.com/" className="linkedin"><GrLinkedin /></a>
                                <a href="https://www.youtube.com/" className="youtube" ><RiYoutubeFill /></a>
                                <a href="https://business.whatsapp.com/" className='whatsapp'><FaWhatsapp /></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/enterprises">Enterprises</Link></li>
                                <li><Link to="/">Privacy policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            {/* <h4>Our Services</h4>
                            <ul>
                                <li><Link to="/">Web Design</Link></li>
                                <li><Link to="/">Web Development</Link></li>
                                <li><Link to="/">Product Management</Link></li>
                                <li><Link to="/">Marketing</Link></li>
                                <li><Link to="/">Graphic Design</Link></li>
                            </ul> */}
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                AUM PRASAD CASTING (P) LTD. <br />
                                SECTOR NO.10, PLOT NO. 214, <br />
                                PCNTDA, BHOSARI, PUNE – 411 026 <br />
                                INDIA. <br />
                                <br /> 
                                <strong>Phone:</strong> 00 91 20 32609140<br />
                                <strong>Email:</strong> info@aumprasadcasting.com <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: sales@aumprasadcasting.com
                            </p>

                        </div>

                    </div>
                </div>

                <div className="container mt-4">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Aum Prasad Casting</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="/">Yash</a>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer;
