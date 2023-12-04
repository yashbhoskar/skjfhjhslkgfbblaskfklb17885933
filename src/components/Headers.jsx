import React from 'react';
import './Home.css';
import APCLogo from '../assets/APC_Logo.jpg';
import { Link } from 'react-router-dom';


export default function Headers() {

  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  return (
    <div>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

          <Link to="index.html" className="logo d-flex align-items-center">

            <img src={APCLogo} alt="" />
            <h1>Aum Prasad Casting</h1>
          </Link>

          <button className="btn btn-sm mobile-nav-toggle mobile-nav-show bi bi-list">btn </button>
          <button className="btn btn-sm mobile-nav-toggle mobile-nav-hide d-none bi bi-x">btn </button>
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
              {/* <li><a href="" className="active">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li> */}
              {/* <li><a href="">Pricing</a></li> */}
              <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact</a></li>
              <li><a className="get-a-quote" href="get-a-quote.html">Get a Quote</a></li>
            </ul>
          </nav>
        </div>
      </header>



    </div>
  );
}
