import React from 'react'
import Footer from './Footer';
import Headers from './Headers';
// import './Contact.css'
// import './Home.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Contact = () => {
    return (
        <div>
            <Headers />
            <main id="main">


                <div className="breadcrumbs">
                    <div className="page-header d-flex align-items-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/src/assets/page-header.jpg)`}}>
                        <div className="container position-relative">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h2>Contact</h2>
                                    <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <div className="container">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Contact</li>
                            </ol>
                        </div>
                    </nav>
                </div>


                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">

                        <div>
                            <iframe style={{ border: "0", width: "100%", height: "340px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15121.216254599964!2d73.8333203!3d18.6503466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b80ef4ebafdd%3A0x9987bf3d1f2dc6ac!2sAum%20Prasad%20Casting!5e0!3m2!1sen!2sin!4v1701765773888!5m2!1sen!2sin" frameBorder="0" allowFullScreen></iframe>
                        </div>

                        <div className="row gy-4 mt-4">

                            <div className="col-lg-4">

                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <h4>Location:</h4>
                                        <p>AUM PRASAD CASTING (P) LTD. <br />
                                            SECTOR NO.10, PLOT NO. 214, <br />
                                            PCNTDA, BHOSARI, PUNE – 411 026 <br />
                                            INDIA.</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div>
                                        <h4>Email:</h4>
                                        <p>info@aumprasadcasting.com</p>
                                        <p>sales@aumprasadcasting.com</p>
                                    </div>
                                </div>

                                <div className="info-item d-flex">
                                    <i className="bi bi-phone flex-shrink-0"></i>
                                    <div>
                                        <h4>Call:</h4>
                                        <p>00 91 20 32609140</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-8">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

export default Contact;
