import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-light min-vh-100 pb-5">
            {/* Header */}
            <div className="bg-primary-custom py-5 mb-5 text-white text-center">
                <div className="container py-3">
                    <h1 className="display-4 fw-bold">Get In Touch</h1>
                    <p className="lead opacity-75">We are here to answer your questions and help you get started</p>
                </div>
            </div>

            <div className="container">
                <div className="row g-5">
                    {/* Contact Info */}
                    <div className="col-lg-5">
                        <div className="card border-0 shadow-lg h-100">
                            <div className="card-body p-4 p-lg-5">
                                <h3 className="fw-bold text-primary-custom mb-4">Contact Information</h3>
                                <p className="text-muted mb-5">
                                    Fill out the form or contact us directly using the details below.
                                </p>

                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0 bg-primary-custom text-white p-3 rounded-circle" style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="fw-bold mb-1">Our Location</h6>
                                        <p className="text-muted small mb-0">
                                            F-137, Sahjanand Complex,<br/>
                                            Opp Sarswati Complex,<br/>
                                            Manjalpur, Vadodara - 390011
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0 bg-primary-custom text-white p-3 rounded-circle" style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="fw-bold mb-1">Phone Number</h6>
                                        <p className="mb-0"><a href="tel:+919826863122" className="text-decoration-none text-muted small">+91 98268 63122</a></p>
                                        <p className="mb-0"><a href="tel:+918780828848" className="text-decoration-none text-muted small">+91 87808 28848</a></p>
                                    </div>
                                </div>

                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0 bg-success text-white p-3 rounded-circle" style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="fw-bold mb-1">WhatsApp Us</h6>
                                        <p className="text-muted small mb-2">Chat for quick details</p>
                                        <a href="https://wa.me/919826863122" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-success rounded-pill px-3">
                                            Chat Now
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="flex-shrink-0 bg-primary-custom text-white p-3 rounded-circle" style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                        <FaClock />
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="fw-bold mb-1">Working Hours</h6>
                                        <p className="text-muted small mb-0">Mon - Sat: 9:00 AM - 8:00 PM</p>
                                        <p className="text-muted small mb-0">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Visual Only) */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-lg h-100">
                            <div className="card-body p-4 p-lg-5">
                                <h3 className="fw-bold text-primary-custom mb-4">Send us a Message</h3>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label text-muted small fw-bold">Your Name</label>
                                            <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="John Doe" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label text-muted small fw-bold">Phone Number</label>
                                            <input type="tel" className="form-control form-control-lg bg-light border-0" placeholder="+91 98765 43210" />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label text-muted small fw-bold">Email Address</label>
                                            <input type="email" className="form-control form-control-lg bg-light border-0" placeholder="name@example.com" />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label text-muted small fw-bold">Select Course</label>
                                            <select className="form-select form-select-lg bg-light border-0 text-muted">
                                                <option>Secondary (Std 6-10)</option>
                                                <option>Higher Secondary (Science)</option>
                                                <option>Other Enquiry</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label text-muted small fw-bold">Message</label>
                                            <textarea className="form-control form-control-lg bg-light border-0" rows="4" placeholder="How can we help you?"></textarea>
                                        </div>
                                        <div className="col-12 mt-4">
                                            <button type="submit" className="btn btn-primary-custom w-100 py-3 text-uppercase fw-bold letter-spacing-1">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card border-0 shadow-sm overflow-hidden rounded-3">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.657987349948!2d73.1934!3d22.2533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE1JzExLjkiTiA3M8KwMTEnMzYuMiJF!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin" 
                                width="100%" 
                                height="400" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy"
                                title="Institute Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
