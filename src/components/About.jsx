import React, {useEffect} from 'react';
import Headers from './Headers';
import Footer from './Footer';
import './Home.css'
import GLightbox from 'glightbox';
import PureCounter from '@srexi/purecounterjs';
import { Swiper, SwiperSlide } from 'swiper';

import AOS from 'aos';
import { Link } from 'react-router-dom';

import about from '../assets/about.jpg';
import team_1 from '../assets/team/team-1.jpg'

export default function About() {

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
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2>About</h2>
                  <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="container">
              <ol>
                <li><Link to="/home">Home</Link></li>
                <li>About</li>
              </ol>
            </div>
          </nav>
        </div>

        {/* {/*   */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="row gy-4">
              <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                <img src={about} className="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
              </div>
              <div className="col-lg-6 content order-last  order-lg-first">
                <h3>About Us</h3>
                <p>
                  Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti totam ut eius incidunt reiciendis veritatis asperiores placeat.
                </p>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="100">
                    <i className="bi bi-diagram-3"></i>
                    <div>
                      <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                      <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="200">
                    <i className="bi bi-fullscreen-exit"></i>
                    <div>
                      <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                      <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-broadcast"></i>
                    <div>
                      <h5>Voluptatem et qui exercitationem</h5>
                      <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <section id="stats-counter" className="stats-counter pt-0">
          <div className="container" data-aos="fade-up">

            <div className="row gy-4">

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Hours Of Support</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
                  <p>Workers</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="team" className="team pt-0">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <span>Leadership</span>
              <h2>Leadership</h2>

            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12">
                <div className="member">
                  <img src={team_1} className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Walter White</h4>
                    <span>Casting</span>
                    <p>
                      Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima id, voluptatum odio dignissimos ab adipisci culpa eius iusto suscipit omnis aperiam inventore consequuntur, possimus eum ducimus maxime ut nisi neque!
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident eos neque, nisi dolor aliquam tempora nam aliquid dolores impedit modi optio necessitatibus sit mollitia quo exercitationem recusandae eaque animi. Tempora!
                    </p>
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="team" className="team pt-0">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <span>Our Team</span>
              <h2>Our Team</h2>

            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">

              <div className="col-lg-4 col-md-6 d-flex">
                <div className="member">
                  <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Walter White</h4>
                    <span>Web Development</span>
                    <p>
                      Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                    </p>
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex">
                <div className="member">
                  <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>Sarah Jhinson</h4>
                    <span>Marketing</span>
                    <p>
                      Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                    </p>
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex">
                <div className="member">
                  <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                  <div className="member-content">
                    <h4>William Anderson</h4>
                    <span>Content</span>
                    <p>
                      Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                    </p>
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        <Footer />
    </div>
  )
}
