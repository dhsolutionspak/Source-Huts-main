import { publicUrlFor } from "../../../globals/constants";

export default function SectionServiceContent() {
    return (
        <>
            <div className="service-category-title">
                <div className="service-category-media">
                    <img src={publicUrlFor("/assets/images/icons/pic7.png")} alt="Freight Icon" />
                </div>
                <h2>Freight Forwarding</h2>
            </div>
            <div className="wt-media">
                <img src={publicUrlFor("/assets/images/services/s1.jpg")} alt="Freight Forwarding" />
            </div>
            <h2 className="wt-title mt-4 mb-4">Streamline Your Freight Forwarding Needs</h2>
            <p>
                Freight forwarding is the backbone of global trade, ensuring that goods are transported efficiently and securely across the world. With our expert team and state-of-the-art logistics network, we provide seamless freight forwarding solutions tailored to your business needs.
            </p>
            <p>
                From ocean and air freight to customs clearance and warehousing, we handle every aspect of the supply chain with precision and care. Trust us to deliver your cargo on time, every time, while minimizing costs and maximizing reliability.
            </p>
            <h2 className="wt-title mt-4 mb-4">Services Offered</h2>
            <div className="service-offered">
                <div className="media">
                    <img src={publicUrlFor("/assets/images/services/s1-1.jpg")} alt="Services Offered" />
                </div>
                <div className="service-offered-list">
                    <p>
                        Our comprehensive freight forwarding services include the following:
                    </p>
                    <div className="tw-checked-list">
                        <ul>
                            <li>Global Ocean Freight Management</li>
                            <li>Air Freight Solutions</li>
                            <li>Customs Brokerage and Clearance</li>
                            <li>Warehousing and Distribution</li>
                            <li>End-to-End Supply Chain Solutions</li>
                            <li>Real-Time Cargo Tracking</li>
                            <li>Specialized Handling for Fragile Goods</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
