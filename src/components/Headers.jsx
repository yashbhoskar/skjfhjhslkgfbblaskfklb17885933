import React from 'react';
import './Home.css';
import APCLogo from '../assets/APC_Logo.png';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import GLightbox from 'glightbox';
import PureCounter from '@srexi/purecounterjs';
import { Swiper, SwiperSlide } from 'swiper';
import AOS from 'aos';
import { Button } from 'react-bootstrap';
import { IoListOutline } from '@react-icons/all-files/io5/IoListOutline';
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown'
import { IoIosClose } from '@react-icons/all-files/io/IoIosClose';

import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  



export default function Headers() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

      setIsSidebarOpen(!isSidebarOpen);
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
    const navDropdowns = document.querySelectorAll('.navbar .dropdown > Link');

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


    document.addEventListener("DOMContentLoaded", function () {
  // Select all list items inside the navbar
  var navbarItems = document.querySelectorAll("#navbar ul li");

  // Add a click event listener to each list item
  navbarItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove the mobile-nav-active class from the navbar
      document.getElementById("navbar").classList.remove("mobile-nav-active");
    });
  });
});

  }, [isSidebarOpen]);

  return (
    <div>
      {/* <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          <Link to="/" className="logo d-flex align-items-center">

            <img src={APCLogo} alt="" />
          </Link>

           <IoListOutline className="mobile-nav-toggle mobile-nav-show" style={{ cursor: "pointer" }}> </IoListOutline>
         <IoListOutline className=" mobile-nav-toggle mobile-nav-hide d-none" style={{ cursor: "pointer" }}> </IoListOutline>
          
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/about"> About </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li className="dropdown">
                <Link to="">
                  <span>Products &nbsp;</span>
                  <FaChevronDown> <i className="bi bi-chevron-up dropdown-indicator"></i> </FaChevronDown>
                </Link>
                <ul>
                  <li><Link to="/">AUTOMOTIVE SECTOR </Link></li>
                  <li><Link to="/">CAPITAL EQUIPMENT AND MACHINE MANUFACTURERS</Link></li>
                  <li><Link to="/">ELECTRICAL/ ELECTRONIC  EQUIPMENT MANUFACTURERS</Link></li>
                  <li><Link to="/">Company 4</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link href="#">
                  <span>Enterprises &nbsp;</span>
                  <FaChevronDown className="dropdown-indicator"></FaChevronDown>
                </Link>
                <ul>
                  <li><Link to="/">Company 1</Link></li>
                  <li><Link to="/">Company 2</Link></li>
                </ul>
              </li>
              <li><a className="get-a-quote" href="https://business.whatsapp.com/">Get a Quote</a></li>
            </ul>
          </nav>
        </div>
      </header> */}

<Navbar bg="primary" expand="md">  
    <Container>  
      <Navbar.Brand href="#home">Navbar Brand</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="#home">Home</Nav.Link>  
          <Nav.Link href="#link">Link</Nav.Link>  
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
            <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
          </NavDropdown>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  



    </div>
  );
}
