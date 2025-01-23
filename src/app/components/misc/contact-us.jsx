/* eslint-disable jsx-a11y/iframe-has-title */
import Banner from "../../sections/common/banner";
import { data } from "../../../globals/data/contact-us";
import { publicUrlFor } from "../../../globals/constants";

export default function ContactPage() {
    return (
        <>
            <Banner _data={data.banner} />
            
            <div className="section-full  p-t120 p-b120">
                <div className="section-content">
                    <div className="container">
                        <div className="gmap-outline mb-5">
                            <div className="google-map">
                                <div style={{ width: '100%' }}>
                                    <iframe height={460} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.844908393247!2d109.89773507627068!3d40.65534904108154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x360ff262f5ba304f%3A0x1768b7d10fa918c2!2sMinzhu%20Road!5e0!3m2!1sen!2s!4v1731443042886!5m2!1sen!2s" />
                                </div>
                            </div>
                        </div>
                        <div className="contact-one">
                            {/* TITLE START*/}
                            <div className="section-head left wt-small-separator-outer">
                                <h2 className="wt-title m-b30">Send Us a Message</h2>
                            </div>
                            {/* TITLE END*/}
                            {/* CONTACT FORM*/}
                            <div className="contact-one-inner  site-bg-sky-blue-light">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="contact-form-outer">
                                            <form className="cons-contact-form" method="post" action="form-handler2.php">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group mb-3">
                                                            <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group mb-3">
                                                            <input name="subject" type="text" className="form-control" required placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group mb-3">
                                                            <textarea name="message" className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button type="submit" className="btn-half site-button"><span>Submit Now</span><em /></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="contact-info  site-bg-dark bg-no-repeat bg-bottom-left" style={{ backgroundImage: `url(${publicUrlFor('/assets/images/background/contact-bg.png')})` }}>
                                            {/* TITLE START*/}
                                            <div className="section-head-small white mb-4">
                                                <h3 className="wt-title">Let's get in touch</h3>
                                            </div>
                                            {/* TITLE END*/}
                                            <div className="contact-info-section">
                                                <div className="c-info-column">
                                                    <div className="c-info-icon fa fa-map-marker"><span /></div>
                                                    <p>
                                                    Unit 6, Building 13, No. 2 Minzhu Road, Qingshan District, Baotou, China</p>
                                                </div>
                                                <div className="c-info-column">
                                                    <div className="c-info-icon fa fa-mobile-phone custome-size"><span /></div>
                                                    <p><a href="tel:+44-7883-186893">+44-7883-186893</a></p>
                                                    <p><a href="tel:+92-340-7389082">+92-340-7389082</a></p>
                                                </div>
                                                <div className="c-info-column">
                                                    <div className="c-info-icon fa fa-envelope-o"><span /></div>
                                                    <p>support@sourcehuts.com</p>
                                                    <p>inquiry@sourcehuts.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}