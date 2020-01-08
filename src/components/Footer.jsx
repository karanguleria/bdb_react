import React from 'react';
import Subscribe from './Subscribe';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
function Footer() {
    return (
        <div className="Footer">
            <Subscribe />
            <section className="footer-area">
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <div className="box-icon"></div>
                <Router>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-item">
                                    <div className="logo">
                                        <Link to="/" className="foot-logo"><img src="images/logo2.png" alt="logo" /></Link>
                                        <p className="footer__desc">
                                            Morbi convallis bibendum urna ut viverra. Maecenas
                                            quis consequat libero, a feugiat eros
                        </p>
                                        <ul className="foot-links">
                                            <li>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Dribbble">
                                                    <i className="fa fa-dribbble"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" data-toggle="tooltip" data-placement="bottom" title="Behance">
                                                    <i className="fa fa-behance"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-item">
                                    <h4 className="footer__title">Quick Links</h4>
                                    <ul className="user-links">
                                        <li><Link to="/about">about us</Link></li>
                                        <li><Link to="/sign-up">sign up</Link></li>
                                        <li><Link to="/login">log in</Link></li>
                                        <li><Link to="/add-listing">add listing</Link></li>
                                        <li><Link to="/contact">contact us</Link></li>
                                        <li><Link to="/pricing">pricing</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-item">
                                    <h4 className="footer__title">Categories</h4>
                                    <ul className="user-links">
                                        <li><a href="#">Shops</a></li>
                                        <li><a href="#">Hotels</a></li>
                                        <li><a href="#">Restaurants</a></li>
                                        <li><a href="#">Bars</a></li>
                                        <li><a href="#">Events</a></li>
                                        <li><a href="#">Fitness</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="footer-item">
                                    <h4 className="footer__title">Contact with Us</h4>
                                    <ul className="user-links contact-links">
                                        <li><span className="la la-home contact-icon"></span> 12345 Little Baker St, Melbourne </li>
                                        <li><span className="la la-headphones contact-icon"></span> <a href="#">+ 61 23 8093 3400</a></li>
                                        <li><span className="la la-envelope-o contact-icon"></span> <a href="#">info@businessdatabook.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copy-right">
                                    <p className="copy__desc">
                                        &copy; Copyright Dirto 2019. Made with
                        <span className="la la-heart-o"></span> by <a href="https://techydevs.com">Techydevs.</a>
                                    </p>
                                    <ul className="condition-links">
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Help Center</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </section>
        </div>
    );
}
export default Footer;