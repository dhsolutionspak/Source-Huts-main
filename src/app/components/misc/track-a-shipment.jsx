/* eslint-disable jsx-a11y/iframe-has-title */
import Banner from "../../sections/common/banner";
import { data } from "../../../globals/data/track-a-shipment";

export default function ShipmentTrackingPage() {
    return (
        <>
            <Banner _data={data.banner} />
            
            <div className="section-full p-t120 p-b120">
                <div className="section-content">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head center wt-small-separator-outer">
                            <h2 className="wt-title m-b30">Track Your Shipment</h2>
                            <p className="section-head-text">
                                Easily track the status of your shipment by entering your tracking details below. Stay updated with real-time information about your package!
                            </p>
                        </div>
                        {/* TITLE END */}
                        
                        {/* TRACKING FORM */}
                        <div className="shipment-tracking-form site-bg-sky-blue-light p-5">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 mx-auto">
                                    <form className="cons-shipment-form" method="post" action="track-shipment.php">
                                        <div className="form-group mb-4">
                                            <input 
                                                name="tracking_number" 
                                                type="text" 
                                                required 
                                                className="form-control" 
                                                placeholder="Enter Tracking Number" 
                                            />
                                        </div>
                                        <div className="form-group mb-4">
                                            <input 
                                                name="email" 
                                                type="email" 
                                                required 
                                                className="form-control" 
                                                placeholder="Enter Your Email" 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button 
                                                type="submit" 
                                                className="btn-half site-button">
                                                <span>Track Now</span><em />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                         
                        
                     
                    </div>
                </div>
            </div>
        </>
    );
}
