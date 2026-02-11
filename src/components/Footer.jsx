import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-custom pt-5 pb-2">
            <div className="container">
                <div className="row g-4 mb-5">
                    {/* Brand Section */}
                    <div className="col-lg-4 col-md-6">
                        <h4 className="text-white mb-4 fw-bold">Shree VALLABH Education</h4>
                        <p className="text-white-50 mb-4" style={{ maxWidth: '300px' }}>
                            Empowering students with quality education, conceptual clarity, and expert guidance for a brighter future.
                        </p>
                        <div className="d-flex gap-3">
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center" style={{width: '35px', height: '35px'}}>
                                <FaFacebook />
                            </a>
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center" style={{width: '35px', height: '35px'}}>
                                <FaInstagram />
                            </a>
                            <a href="#" className="btn btn-outline-light btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center" style={{width: '35px', height: '35px'}}>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/" className="text-decoration-none">Home</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-decoration-none">About Us</Link></li>
                            <li className="mb-2"><Link to="/courses" className="text-decoration-none">Courses</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="fw-bold">Courses</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/courses" className="text-decoration-none">Secondary (6-10)</Link></li>
                            <li className="mb-2"><Link to="/courses" className="text-decoration-none">Higher Sec. (11-12)</Link></li>
                            <li className="mb-2"><Link to="/courses" className="text-decoration-none">Science Stream</Link></li>
                            <li className="mb-2"><Link to="/courses" className="text-decoration-none">Entrance Prep</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="fw-bold">Get In Touch</h5>
                        <ul className="list-unstyled text-white-50">
                            <li className="mb-3 d-flex">
                                <FaMapMarkerAlt className="me-3 mt-1 text-secondary-custom" />
                                <span>F-137, Sahjanand Complex, opp Sarswati Complex, Manjalpur, Vadodara - 390011</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <FaPhoneAlt className="me-3 text-secondary-custom" />
                                <span>+91 98268 63122</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <FaPhoneAlt className="me-3 text-secondary-custom" />
                                <span>+91 87808 28848</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-secondary opacity-25" />
                
                <div className="row pt-3">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <p className="mb-0 small text-white-50">
                            &copy; {new Date().getFullYear()} Shree Vallabh Education. All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0 small text-white-50">
                            Designed with Excellence
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
