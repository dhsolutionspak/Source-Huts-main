import { NavLink } from "react-router-dom"
import { publicUrlFor } from "../../../globals/constants"

export default function Footer1() {
    return (
        <>
            <footer className="footer-dark">

            {/* NEWS LETTER SECTION START */}
            <div className="ftr-nw-ltr site-bg-white">
                
                    <div className="ftr-nw-ltr-inner site-bg-primary">
                        <div className="container">
                            <div className="ftr-nw-img">
                                <img src={publicUrlFor("/assets/images/news-l-bg.png")} alt="#" />
                            </div>
                            <div className="ftr-nw-content">
                                <div className="ftr-nw-title">Subscribe for offers and news</div>
                                <div className="ftr-nw-form">
                                    <form>
                                        <input name="news-letter" className="form-control" placeholder="Enter Your Email" type="text" />
                                        <button className="ftr-nw-subcribe-btn">Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {/* NEWS LETTER SECTION END */}

            <div className="ftr-bg"  style={{backgroundImage: `url(${publicUrlFor('/assets/images/footer-bg.jpg')})`}}>
                {/* FOOTER BLOCKES START */}  
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                
                                <div className="widget widget_about">
                                    <div className="logo-footer clearfix">
                                        <NavLink to="/index"><img src={publicUrlFor("/assets/images/main-logo.gif")} alt="#" /></NavLink>
                                    </div>
                                    <p>SOURCEHUTS offers a comprehensive range of services designed to meet the needs of your business worldwide.
                                    </p>
                                    <ul className="social-icons">
                                        <li><a href="https://www.facebook.com/" className="fa fa-facebook"> </a></li>
                                        <li><a href="https://www.twitter.com/" className="fa fa-twitter"> </a></li>
                                        <li><a href="https://www.instagram.com/" className="fa fa-instagram"> </a></li>
                                        <li><a href="https://www.youtube.com/" className="fa fa-youtube-play"> </a></li>
                                    </ul>
                                </div>                            
                                
                            </div>                        
                        
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_services ftr-list-center">
                                    <h3 className="widget-title">Quick Links</h3>
                                    <ul>
                                         <li><NavLink to="/index">Home</NavLink></li>
                                         <li><NavLink to="/services/services2">Services</NavLink></li>
                                         <li><NavLink to="/about-us">About</NavLink></li>
                                        <li><NavLink to="/blogs/grid">Blog</NavLink></li>
                                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_services ftr-list-center">
                                    <h3 className="widget-title">Services</h3>
                                    <ul>
                                        <li><NavLink to="/services/detail-1">Freight Forwarding</NavLink></li>
                                        <li><NavLink to="/services/detail-2">Product Sourcing</NavLink></li>
                                        <li><NavLink to="/services/detail-3">Factory Audit</NavLink></li>
                                        <li><NavLink to="/services/detail-4">Inspection</NavLink></li>
                                        <li><NavLink to="/services/detail-5">Sample Evaluation</NavLink></li>
                                        <li><NavLink to="/services/detail-6">Product Photography & Videography</NavLink></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">  
                                <div className="widget widget_services ftr-list-center">
                                    <h3 className="widget-title">Important Links</h3>
                                    <ul>
                                        <li><NavLink to="/track-a-shipment">Track Your Shipment</NavLink></li>
                                        <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                                        <li><NavLink to="/terms-and-conditions">Terms & Condition</NavLink></li>
                                    </ul>
                                </div>
                            </div> 

                        </div>

                    </div>
                </div>
                {/* FOOTER COPYRIGHT */}
                                    
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-info">
                        
                            <div className="footer-copy-right">
                                <span className="copyrights-text">Copyright © 2024 by Source Huts All Rights Reserved.</span>
                            </div>
                            
                        </div>
                    </div>   
                </div>
            </div>

            </footer>
        </>
    )
}