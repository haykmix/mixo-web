import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-new-2.png';

function FooterHome({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src={logo} alt="" height={"80px"}/>
                                    </a>
                                </div>
                                <a href="/">
                                    Read More <i className="fal fa-arrow-right" />
                                </a>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Company</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-navigation">
                                <h4 className="title">Support</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">Community</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <a href="/">
                                            <i className="fal fa-envelope" /> support@appie.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fal fa-phone" /> +(642) 342 762 44
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="fal fa-map-marker-alt" /> 442 Belle Terre
                                            St Floor 7, San Francisco, AV 4206
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHome;
