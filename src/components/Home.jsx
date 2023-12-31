import React from 'react';
import './Home.css';
import { useEffect } from 'react';

import GLightbox from 'glightbox';
import PureCounter from '@srexi/purecounterjs';
import { Swiper, SwiperSlide } from 'swiper';
import AOS from 'aos';
import { Button, Card, Carousel } from 'react-bootstrap';
import about from '../assets/about.jpg';
import storage from '../assets/storage-service.jpg';
import logistics from '../assets/logistics-service.jpg';
import cargo from '../assets/cargo-service.jpg';
import trucking from '../assets/trucking-service.jpg';
import packaging from '../assets/packaging-service.jpg';
import warehouse from '../assets/warehousing-service.jpg';
import heroImg from '../assets/7378847_32104-removebg.png';
import mahindra from '../assets/mahindra.png';
import tataAutoComp from '../assets/tataAutoComp.jpg';
import force from '../assets/force.png';
import forbMarshall from '../assets/forbes-marshall-logo.jpg';
import elpro from '../assets/elpro.jpg';
import cropimg from '../assets/cropimg.jpg'


import { FaArrowUp } from '@react-icons/all-files/fa/FaArrowUp';
import { Link } from 'react-router-dom';
import Headers from './Headers';
import About from './About';
import Footer from './Footer';
// import Carousel from 'react-bootstrap/Carousel';`

// import companyDomainDetails from './Constants/constants';


export default function Home() {

  useEffect(() => {
    "use strict";

    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    /**
     * Sticky header on scroll
     */
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      });
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function () {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        mobileNavToogle();
      })
    });

    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavShow.classList.toggle('d-none');
      mobileNavHide.classList.toggle('d-none');
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });

    });

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

    navDropdowns.forEach(el => {
      el.addEventListener('click', function (event) {
        if (document.querySelector('.mobile-nav-active')) {
          event.preventDefault();
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('dropdown-active');

          let dropDownIndicator = this.querySelector('.dropdown-indicator');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      })
    });

    /**
     * Initiate pURE cOUNTER
     */
    new PureCounter();

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });

  }, []);

  return (
    <div>
      <Headers />
      {/* <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up">Your Quote/Motivation Goes Here......</h2>
              <p data-aos="fade-up" data-aos-delay="100">Aluminium Gravity Die casting Foundry with <br />
                special focus to cater to the requirements of Automotive , <br /> Non Automotive segment, Electrical Industry and the Export market.</p>

              <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Clients</p>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Projects</p>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Support</p>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                    <p>Workers</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            </div>

          </div>
        </div>
      </section> */}

      <Carousel indicators={false} id="hero" className=" d-flex align-items-center">
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={cropimg} alt="Image One" />
          <Carousel.Caption className="text-left">
            <h3 data-aos="fade-up" >First slide label</h3>
            <p data-aos="fade-up" data-aos-delay="100">Aluminium Gravity Die casting Foundry with special focus to cater to the requirements of Automotive, Non Automotive segment, Electrical Industry.</p>
          </Carousel.Caption>
        </Carousel.Item>
        < Carousel.Item interval={200000}>
          <img className="d-block w-100" src={cropimg} alt="Image two" />
          <Carousel.Caption className="text-left">
            <h3 data-aos="fade-up" >Second slide label</h3>
            <p data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        < Carousel.Item interval={2000}>
          <img className="d-block w-100" src={cropimg} alt="Image three" />
          <Carousel.Caption className="text-left">
            <h3 data-aos="fade-up" >Third slide label</h3>
            <p data-aos="fade-up" data-aos-delay="100">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <main id="main">

        {/* <section id="featured-services" className="featured-services">
          <div className="container">

            <div className="row gy-4">

              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
                <div className="icon flex-shrink-0"><i className="fa-solid fa-cart-flatbed"></i></div>
                <div>
                  <h4 className="title">Lorem Ipsum</h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>


              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                <div className="icon flex-shrink-0"><i className="fa-solid fa-truck"></i></div>
                <div>
                  <h4 className="title">Dolor Sitema</h4>
                  <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                  <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <div className="icon flex-shrink-0"><i className="fa-solid fa-truck-ramp-box"></i></div>
                <div>
                  <h4 className="title">Sed ut perspiciatis</h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                  <a href="service-details.html" className="readmore stretched-link"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
                </div>
              </div>

            </div>

          </div>
        </section> */}


        <section id="about" className="about pt-0">
          <div className="container" data-aos="fade-up">
            <div className="row section-header">
              <span>About Us</span>
              <h2>About Us</h2>
            </div>
            <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">

              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Employees</p>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Components</p>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Support</p>
                </div>
              </div>

            </div>
            <div className="row gy-4">
              <div className="col-lg-4 position-relative align-self-start order-lg-last order-first">
                <img src={about} className="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
              </div>
              <div className="col-lg-8 content order-last  order-lg-first">
                <ul>
                  <li data-aos="fade-up" data-aos-delay="100">
                    <i className="bi bi-diagram-3"></i>
                    <div>
                      <h5>Heading</h5>
                      <p>AUM PRASAD CASTING PVT LTD., is Aluminium Gravity Die casting Foundry with special focus to cater to the requirements of Automotive  , Non Automotive segment, Electrical Industry and the Export market.</p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-fullscreen-exit"></i>
                    <div>
                      <h5>Heading</h5>
                      <p>AUM PRASAD CASTING PVT LTD., has been promoted by Two technocrats, both Engineers with more than Fifteen years experience to their credit  in Die designing, Die manufacturing, Aluminium Sand castings and Gravity die castings.</p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-broadcast"></i>
                    <div>
                      <h5>Heading</h5>
                      <p>We can supply castings with minimum  50 gms weight upto 70 kgs weight. We specialize delivery as per the customer requirements, with consistent quality and firm dispatch schedules.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>


        <section id="service" className="services pt-0">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <span>Our Services</span>
              <h2>Our Services</h2>

            </div>

            <div className="row gy-4">

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="card">
                  <div className="card-img">
                    <img src={storage} alt="" className="img-fluid" />
                  </div>
                  <h3><a href="service-details.html" className="stretched-link">Storage</a></h3>
                  <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="card">
                  <div className="card-img">
                    <img src={logistics} alt="" className="img-fluid" />
                  </div>
                  <h3><a href="service-details.html" className="stretched-link">Logistics</a></h3>
                  <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card">
                  <div className="card-img">
                    <img src={cargo} alt="" className="img-fluid" />

                  </div>
                  <h3><a href="service-details.html" className="stretched-link">Cargo</a></h3>
                  <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="card">
                  <div className="card-img">
                    <img src={trucking} alt="" className="img-fluid" />
                  </div>
                  <h3><a href="service-details.html" className="stretched-link">Trucking</a></h3>
                  <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="card">
                  <div className="card-img">
                    <img src={packaging} alt="" className="img-fluid" />
                  </div>
                  <h3><a href="service-details.html" className="stretched-link">Packaging</a></h3>
                  <p>Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates</p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div className="card">
                  <div className="card-img">
                    <img src={warehouse} alt="" className="img-fluid" />
                  </div>
                  <h3><a href="service-details.html" className="stretched-link">Warehousing</a></h3>
                  <p>Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla</p>
                </div>
              </div>

            </div>

          </div>
        </section>


        <section id="call-to-action" className="call-to-action">
          <div className="container" data-aos="zoom-out">

            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h3>Call To Action</h3>
                {/* <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
                <a className="cta-btn" href="https://business.whatsapp.com/">Call To Action</a>
              </div>
            </div>

          </div>
        </section>
        {/* <section id="testimonials" className="testimonials">
          <div className="container">

            <div className="slides-1 swiper" data-aos="fade-up">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonials1} className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonials2} className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonials3} className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonials4} className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img src={testimonials5} className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
        </section> */}
        <section className="testimonials">
          <Carousel className="row text-center" indicators={false} touch={true} >
            <Carousel.Item interval={1000} className="col-md-4 mb-5 mb-md-0 testimonial-item">
              {/* <div className="d-flex justify-content-center mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle shadow-1-strong" width="150" height="150" />
              </div>
              <h5 className="mb-3">Maria Smantha</h5>
              <h6 className="text-primary mb-3">Web Developer</h6>
              <p className="px-xl-3">
                <i className="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p> */}
              <div className="row justify-content-center">
                <Card className='col-md-4 m-4 testomonials-card' >
                  <Card.Img className='card-img' variant="top" src={mahindra} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>

                <Card className='col-md-4 m-4 testomonials-card'>
                  <Card.Img className='card-img' variant="top" src={forbMarshall} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>

                <Card className='col-md-4 m-4 testomonials-card'>
                  <Card.Img className='card-img' variant="top" src={force} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={1000} className="col-md-4 mb-5 mb-md-0 testimonial-item">
              <div className="row justify-content-center">
                <Card className='col-md-4 m-4 testomonials-card' >
                  <Card.Img className='card-img' variant="top" src={mahindra} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>

                <Card className='col-md-4 m-4 testomonials-card'>
                  <Card.Img className='card-img' variant="top" src={forbMarshall} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>

                <Card className='col-md-4 m-4 testomonials-card'>
                  <Card.Img className='card-img' variant="top" src={force} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
            <Carousel.Item className="col-md-4 mb-0 testimonial-item">
              <div className="row justify-content-center">
                <Card className='col-md-4 m-4 testomonials-card' >
                  <Card.Img className='card-img' variant="top" src={mahindra} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>

                <Card className='col-md-4 m-4 testomonials-card'>
                  <Card.Img className='card-img' variant="top" src={forbMarshall} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>

                <Card className='col-md-4 m-4 testomonials-card'>
                  <Card.Img className='card-img' variant="top" src={force} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
      </main>
      <Footer />

      <Link to="/" className="scroll-top d-flex align-items-center justify-content-center"><FaArrowUp /></Link>
    </div>
  )
}
