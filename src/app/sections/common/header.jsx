import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../globals/constants";
import { useState } from "react";

function Header() {
    const [isActive, setIsActive] = useState(false);

    function toggleNavClass() {
        setIsActive(!isActive);
    }

    function closeNav() {
        setIsActive(false);
    }

    return (
        <header className={"site-header header-style-3 mobile-sider-drawer-menu " + (isActive ? "active" : "")}>            
            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar">
                    <div className="container-fluid clearfix">
                        <div className="logo-header">
                            <div className="logo-header-inner logo-header-one">
                                <NavLink to="/" onClick={closeNav}>
                                    <img src={publicUrlFor("/assets/images/main-logo.gif")} alt="Logo" />
                                </NavLink>
                            </div>
                        </div>

                        <button id="mobile-side-drawer" onClick={toggleNavClass} className="navbar-toggler">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar icon-bar-first"></span>
                            <span className="icon-bar icon-bar-two"></span>
                            <span className="icon-bar icon-bar-three"></span>
                        </button>

                        <div className={`nav-animation header-nav ${isActive ? 'full-screen' : ''}`}>
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/index" onClick={closeNav}>Home</NavLink></li>
                                <li><NavLink to="/about-us" onClick={closeNav}>About Us</NavLink></li>
                                <li className="has-child">
                                    <NavLink to="/services/services2" onClick={closeNav}>Services</NavLink>
                                    <ul className="sub-menu">
                                        <li><NavLink to="/services/detail-1" onClick={closeNav}>Freight Forwarding</NavLink></li>
                                        <li><NavLink to="/services/detail-2" onClick={closeNav}>Product Sourcing</NavLink></li>
                                        <li><NavLink to="/services/detail-3" onClick={closeNav}>Factory Audit</NavLink></li>
                                        <li><NavLink to="/services/detail-4" onClick={closeNav}>Inspection</NavLink></li>
                                        <li><NavLink to="/services/detail-5" onClick={closeNav}>Sample Evaluation</NavLink></li>
                                        <li><NavLink to="/services/detail-6" onClick={closeNav}>Product Photography & Videography</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/blogs/grid" onClick={closeNav}>Blog</NavLink></li>
                                <li><NavLink to="/faq" onClick={closeNav}>Faqs</NavLink></li>
                                <li><NavLink to="/contact-us" onClick={closeNav}>Contact</NavLink></li>
                                <li><NavLink to="/track-a-shipment" onClick={closeNav}>Track a Shipment</NavLink></li>
                            </ul>
                        </div>

                        <div className="extra-nav header-2-nav">
                            <div className="extra-cell">
                                <div className="header-search">
                                    <a href="#search" className="header-search-icon"><i className="fa fa-search"></i></a>
                                </div>
                            </div>
                            <div className="extra-cell">
                                <div className="header-nav-call-section">
                                    <div className="detail">
                                        <span className="title">Call us at </span>
                                        <span><a href="tel:+447883186893">+44-7883-186893</a></span>
                                    </div>
                                    <div className="media">
                                        <img src={publicUrlFor("/assets/images/call.png")} alt="Call" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="search">
                    <span className="close"></span>
                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                        <input className="form-control" name="q" type="search" placeholder="Type to search" />
                        <span className="input-group-append">
                            <button type="button" className="search-btn">
                                <i className="fa fa-paper-plane"></i>
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </header>
    );
}

export default Header;