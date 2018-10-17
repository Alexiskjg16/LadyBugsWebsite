import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
            <Link to="/" className="NavLinks"> Home </Link>
            <Link to="/About" className="NavLinks"> About </Link>
            <Link to="/Calendar" className="NavLinks"> Calendar </Link>
            <Link to="/Contact" className="NavLinks"> Contact Us </Link>
            <Link to="/Gallery" className="NavLinks"> Gallery </Link>
            <Link to="/Newsletter" className="NavLinks"> Newsletter </Link>
            <Link to="/ShopOnline" className="NavLinks"> Shop </Link>
            </div>
        )
    }
}

export default NavBar;