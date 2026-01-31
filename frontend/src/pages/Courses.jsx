import React from 'react';
import { FaBook, FaFlask, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="bg-primary-custom py-5 text-center text-white">
                <div className="container py-5">
                    <h1 className="display-4 fw-bold">Our Courses</h1>
                    <p className="lead opacity-90">Comprehensive learning programs for Std 6 to 12</p>
                </div>
            </div>

            {/* Courses List */}
            <div className="container py-5">
                <div className="row g-4">
                    {/* Secondary Section */}
                    <div className="col-lg-6">
                        <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-header bg-white border-0 pt-4 px-4">
                                <span className="badge bg-secondary-custom px-3 py-2 rounded-pill mb-2">Std 6 to 10</span>
                                <h3 className="card-title fw-bold text-primary-custom">Secondary Section</h3>
                            </div>
                            <div className="card-body px-4">
                                <p className="text-muted mb-4">
                                    Building a strong foundation in Mathematics and Science for CBSE & GSEB students.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="mb-3 d-flex align-items-center text-muted">
                                        <FaCheck className="text-success me-2" /> Concept Clarity
                                    </li>
                                    <li className="mb-3 d-flex align-items-center text-muted">
                                        <FaCheck className="text-success me-2" /> Regular Practice
                                    </li>
                                    <li className="mb-3 d-flex align-items-center text-muted">
                                        <FaCheck className="text-success me-2" /> Weekly Tests
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer bg-white border-0 pb-4 px-4">
                                <Link to="/contact" className="btn btn-outline-primary w-100 rounded-pill fw-bold">Enquire Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Higher Secondary Section */}
                    <div className="col-lg-6">
                        <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="card-header bg-white border-0 pt-4 px-4">
                                <span className="badge bg-primary-custom px-3 py-2 rounded-pill mb-2">Std 11 & 12 (Science)</span>
                                <h3 className="card-title fw-bold text-primary-custom">Higher Secondary</h3>
                            </div>
                            <div className="card-body px-4">
                                <p className="text-muted mb-4">
                                    Specialized coaching for Physics, Chemistry, and Maths/Biology with entrance exam prep.
                                </p>
                                <ul className="list-unstyled">
                                    <li className="mb-3 d-flex align-items-center text-muted">
                                        <FaCheck className="text-success me-2" /> Board Exam Focus
                                    </li>
                                    <li className="mb-3 d-flex align-items-center text-muted">
                                        <FaCheck className="text-success me-2" /> JEE / NEET Foundation
                                    </li>
                                    <li className="mb-3 d-flex align-items-center text-muted">
                                        <FaCheck className="text-success me-2" /> Doubt Solving Sessions
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer bg-white border-0 pb-4 px-4">
                                <Link to="/contact" className="btn btn-primary-custom w-100 rounded-pill fw-bold">Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
