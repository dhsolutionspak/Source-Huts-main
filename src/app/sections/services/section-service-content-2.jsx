import { publicUrlFor } from "../../../globals/constants";

export default function SectionServiceContent() {
    return (
        <>
            <div className="service-category-title">
                <div className="service-category-media">
                    <img src={publicUrlFor("/assets/images/icons/pic7.png")} alt="Product Sourcing Icon" />
                </div>
                <h2>Product Sourcing</h2>
            </div>
            <div className="wt-media">
                <img src={publicUrlFor("/assets/images/services/s2.jpg")} alt="Product Sourcing" />
            </div>
            <h2 className="wt-title mt-4 mb-4">Discover the Best Products for Your Business</h2>
            <p>
                Product sourcing is the key to ensuring that your business gets access to high-quality, reliable, and cost-effective products from around the globe. Our team specializes in connecting you with the right suppliers to meet your unique business needs.
            </p>
            <p>
                From identifying trustworthy manufacturers to negotiating the best deals, we handle every step of the process. Whether you're looking for wholesale goods, private-label products, or custom manufacturing, we've got you covered.
            </p>
            <h2 className="wt-title mt-4 mb-4">Services Offered</h2>
            <div className="service-offered">
                <div className="media">
                    <img src={publicUrlFor("/assets/images/services/s1-1.jpg")} alt="Services Offered" />
                </div>
                <div className="service-offered-list">
                    <p>
                        Our product sourcing services include the following:
                    </p>
                    <div className="tw-checked-list">
                        <ul>
                            <li>Supplier Identification and Verification</li>
                            <li>Negotiation of Pricing and Terms</li>
                            <li>Quality Assurance and Inspection</li>
                            <li>Logistics and Shipping Coordination</li>
                            <li>Custom Product Development</li>
                            <li>Wholesale and Bulk Product Sourcing</li>
                            <li>Market Trend Analysis for Sourcing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
