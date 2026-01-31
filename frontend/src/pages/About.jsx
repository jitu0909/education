import React from 'react';
import { FaUserTie, FaBullseye, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-primary-custom py-5 mb-5 text-white">
                <div className="container py-3">
                    <h1 className="display-4 fw-bold text-center">About Us</h1>
                    <p className="lead text-center opacity-75">
                        Nurturing Potential, Building Futures since 2008
                    </p>
                </div>
            </div>

            <div className="container pb-5">
                {/* Intro Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <img 
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                            alt="Students Group" 
                            className="img-fluid rounded-3 shadow"
                        />
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <span className="text-secondary-custom fw-bold text-uppercase">Who We Are</span>
                        <h2 className="mb-4">Premier Coaching Institute in Vadodara</h2>
                        <p className="text-muted mb-4">
                            Shree Vallabh Education is more than just a coaching center; it's a place where academic dreams take flight. 
                            Founded with a vision to simplify complex scientific concepts, we have grown into a trusted name for 
                            CBSE & GSEB coaching in Manjalpur, Vadodara.
                        </p>
                        <p className="text-muted">
                            Our approach goes beyond textbooks. We focus on developing critical thinking and problem-solving skills 
                            that serve students well beyond their school years.
                        </p>
                    </div>
                </div>

                {/* Founder Section */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-lg overflow-hidden">
                            <div className="row g-0">
                                <div className="col-md-4 bg-light d-flex align-items-center justify-content-center p-4">
                                    <div className="text-center">
                                        <div className="bg-white p-3 rounded-circle shadow-sm d-inline-block mb-3">
                                            <FaUserTie className="text-primary-custom" size={60} />
                                        </div>
                                        <h4 className="fw-bold mb-0">Mr. Krutik Rupareliya</h4>
                                        <p className="text-muted small">Founder & Lead Mentor</p>
                                    </div>
                                </div>
                                <div className="col-md-8 p-4 p-lg-5">
                                    <h3 className="mb-3">A Message from the Founder</h3>
                                    <p className="text-muted fst-italic mb-4">
                                        "Education is not just about scoring marks; it's about understanding the world around us. 
                                        My goal has always been to remove the fear of Physics and Maths from students' minds 
                                        and replace it with curiosity and confidence."
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <FaCheckCircle className="text-success me-2" />
                                        <span className="fw-bold text-dark">15+ Years Teaching Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="row g-4 mb-5">
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm card-hover p-4">
                            <div className="d-flex align-items-start">
                                <div className="flex-shrink-0 bg-primary-custom text-white p-3 rounded-3 me-3">
                                    <FaBullseye size={24} />
                                </div>
                                <div>
                                    <h4 className="card-title fw-bold">Our Mission</h4>
                                    <p className="card-text text-muted mt-3">
                                        To provide accessible, high-quality education that empowers students to achieve academic excellence 
                                        while fostering values of integrity, discipline, and hard work.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm card-hover p-4">
                            <div className="d-flex align-items-start">
                                <div className="flex-shrink-0 bg-secondary-custom text-white p-3 rounded-3 me-3">
                                    <FaLightbulb size={24} />
                                </div>
                                <div>
                                    <h4 className="card-title fw-bold">Our Vision</h4>
                                    <p className="card-text text-muted mt-3">
                                        To be the most preferred educational partner in the region, known for our student-centric approach, 
                                        innovative teaching methodologies, and consistent results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
