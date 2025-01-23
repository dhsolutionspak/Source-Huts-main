import { publicUrlFor } from "../../../globals/constants";

export default function SectionServiceContent() {
    return (
        <>
            <div className="service-category-title">
                <div className="service-category-media">
                    <img src={publicUrlFor("/assets/images/icons/pic7.png")} alt="Product Inspection Icon" />
                </div>
                <h2>Inspection</h2>
            </div>
            <div className="wt-media">
                <img src={publicUrlFor("/assets/images/services/s4.jpg")} alt="Product Inspection" />
            </div>
            <h2 className="wt-title mt-4 mb-4">Ensure Product Quality with Professional Inspections</h2>
            <p>
                Product inspection is an essential part of quality control for any business importing or manufacturing goods. Our product inspection services help ensure that the products you receive or manufacture meet your required specifications, quality standards, and compliance with regulatory requirements.
            </p>
            <p>
                We offer a wide range of inspection services, from pre-production checks to final random inspections before shipment. Our experienced inspectors provide accurate, reliable reports, giving you peace of mind that your products will meet customer expectations and prevent costly issues.
            </p>
            <h2 className="wt-title mt-4 mb-4">Services Offered</h2>
            <div className="service-offered">
                <div className="media">
                    <img src={publicUrlFor("/assets/images/services/s1-1.jpg")} alt="Services Offered" />
                </div>
                <div className="service-offered-list">
                    <p>
                        Our product inspection services include the following:
                    </p>
                    <div className="tw-checked-list">
                        <ul>
                            <li>Pre-production Inspection (PPI)</li>
                            <li>In-process Inspection (IPI)</li>
                            <li>Pre-shipment Inspection (PSI)</li>
                            <li>Container Loading Inspection</li>
                            <li>Random Sampling and Product Testing</li>
                            <li>Final Quality Control Inspections</li>
                            <li>Packaging and Labeling Inspection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
