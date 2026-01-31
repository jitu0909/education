import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaGraduationCap, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to close menu on link click
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-custom ${scrolled ? 'shadow-sm' : ''}`}>
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
                    <FaGraduationCap className="me-2 text-primary-custom" size={35} />
                    <div className="d-flex flex-column">
                        <span className="fw-bold text-primary-custom fs-4 lh-1">Shree VALLABH</span>
                        <span className="text-secondary-custom fs-6 fw-bold tracking-wider">EDUCATION</span>
                    </div>
                </Link>
                <button className="navbar-toggler border-0" type="button" onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" onClick={closeMenu}>About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses" onClick={closeMenu}>Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact Us</NavLink>
                        </li>
                        <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                            <Link to="/contact" className="btn btn-primary-custom" onClick={closeMenu}>
                                Enquire Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
