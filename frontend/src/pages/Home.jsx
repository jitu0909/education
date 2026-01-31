import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaUserGraduate, FaTrophy, FaStar, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section text-center d-flex align-items-center">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="d-inline-block mb-3">
                                <span className="badge bg-secondary-custom text-white px-3 py-2 rounded-pill shadow-sm text-uppercase letter-spacing-1">
                                    Admissions Open 2026-27
                                </span>
                            </div>
                            <h1 className="display-3 fw-bold mb-4 text-white text-shadow">
                                Shaping Future with <span className="text-secondary-custom">Excellence</span>
                            </h1>
                            <p className="lead text-white mb-5 opacity-90 fs-4 text-shadow">
                                Empowering students from Std 6 to 12 (CBSE & GSEB) with conceptual learning and expert guidance.
                            </p>
                            <div className="d-flex justify-content-center gap-3 flex-wrap">
                                <Link to="/contact" className="btn btn-secondary-custom btn-lg d-flex align-items-center">
                                    Join Our Classes <FaArrowRight className="ms-2" size={14} />
                                </Link>
                                <Link to="/courses" className="btn btn-outline-light btn-lg px-4 rounded-pill fw-bold">
                                    Explore Courses
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="py-5 bg-white position-relative" style={{ marginTop: '-60px', zIndex: '10' }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-3 col-6">
                            <div className="card border-0 shadow-lg text-center py-4 rounded-3 h-100 transform-scale-md">
                                <h2 className="display-4 fw-bold text-primary-custom mb-0">15+</h2>
                                <p className="text-muted fw-bold text-uppercase mb-0 small">Years Experience</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="card border-0 shadow-lg text-center py-4 rounded-3 h-100 transform-scale-md">
                                <h2 className="display-4 fw-bold text-primary-custom mb-0">500+</h2>
                                <p className="text-muted fw-bold text-uppercase mb-0 small">Students Mentored</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="card border-0 shadow-lg text-center py-4 rounded-3 h-100 transform-scale-md">
                                <h2 className="display-4 fw-bold text-primary-custom mb-0">100%</h2>
                                <p className="text-muted fw-bold text-uppercase mb-0 small">Result Oriented</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="card border-0 shadow-lg text-center py-4 rounded-3 h-100 transform-scale-md">
                                <h2 className="display-4 fw-bold text-primary-custom mb-0">24/7</h2>
                                <p className="text-muted fw-bold text-uppercase mb-0 small">Doubt Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <span className="text-secondary-custom fw-bold text-uppercase tracking-wider letter-spacing-1">Why Choose Us</span>
                        <h2 className="display-5 fw-bold mt-2">We Build Careers, Not Just Grades</h2>
                        <div className="mx-auto mt-3" style={{height: '4px', width: '80px', background: 'var(--secondary-color)', borderRadius: '2px'}}></div>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-box h-100">
                                <div className="feature-icon">
                                    <FaChalkboardTeacher />
                                </div>
                                <h4>Expert Faculty</h4>
                                <p className="text-muted">
                                    Led by Mr. Krutik Rupareliya with 15+ years of experience in Physics & Maths. 
                                    We focus on building strong conceptual foundations.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-box h-100">
                                <div className="feature-icon">
                                    <FaUserGraduate />
                                </div>
                                <h4>Personalized Attention</h4>
                                <p className="text-muted">
                                    Small batch sizes ensure every student gets individual attention. 
                                    We identify weak areas and work on them specifically.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-box h-100">
                                <div className="feature-icon">
                                    <FaTrophy />
                                </div>
                                <h4>Proven Track Record</h4>
                                <p className="text-muted">
                                    Consistently producing top scorers in CBSE & GSEB board exams. 
                                    Our students excel in competitive exams as well.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Showcase / About Teaser */}
            <section className="py-5 bg-light">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="row g-2">
                                <div className="col-6">
                                    <img 
                                        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                        alt="Students studying" 
                                        className="img-fluid rounded-3 shadow-sm mb-2 w-100 transform-scale-md"
                                    />
                                    <img 
                                        src="https://images.unsplash.com/photo-1427504494785-3a9ca28497b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                        alt="Classroom" 
                                        className="img-fluid rounded-3 shadow-sm w-100 transform-scale-md"
                                    />
                                </div>
                                <div className="col-6 mt-4">
                                    <img 
                                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                        alt="Teaching" 
                                        className="img-fluid rounded-3 shadow-sm mb-2 w-100 transform-scale-md"
                                    />
                                    <img 
                                        src="https://images.unsplash.com/photo-1577896337318-2833d2212305?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                        alt="Library" 
                                        className="img-fluid rounded-3 shadow-sm w-100 transform-scale-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <span className="text-secondary-custom fw-bold text-uppercase letter-spacing-1">About Our Institute</span>
                            <h2 className="fw-bold mb-4">Dedicated to Academic Excellence</h2>
                            <p className="lead text-muted mb-4">
                                At Shree Vallabh Education, we believe that every student has the potential to excel. 
                                Our mission is to unlock that potential through rigorous training, regular assessments, 
                                and a supportive learning environment.
                            </p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-2 d-flex align-items-center">
                                    <FaStar className="text-warning me-2" /> 
                                    Comprehensive Study Material
                                </li>
                                <li className="mb-2 d-flex align-items-center">
                                    <FaStar className="text-warning me-2" /> 
                                    Regular Parent-Teacher Meetings
                                </li>
                                <li className="mb-2 d-flex align-items-center">
                                    <FaStar className="text-warning me-2" /> 
                                    Career Counseling & Guidance
                                </li>
                            </ul>
                            <Link to="/about" className="btn btn-primary-custom d-inline-flex align-items-center">
                                Know More About Us <FaArrowRight className="ms-2" size={12} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
