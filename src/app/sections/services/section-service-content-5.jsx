import { publicUrlFor } from "../../../globals/constants";

export default function SectionServiceContent() {
    return (
        <>
            <div className="service-category-title">
                <div className="service-category-media">
                    <img src={publicUrlFor("/assets/images/icons/pic7.png")} alt="Sample Evaluation Icon" />
                </div>
                <h2>Sample Evaluation</h2>
            </div>
            <div className="wt-media">
                <img src={publicUrlFor("/assets/images/services/s5.jpg")} alt="Sample Evaluation" />
            </div>
            <h2 className="wt-title mt-4 mb-4">Assess Product Samples for Quality and Compliance</h2>
            <p>
                Sample evaluation is a critical step in the product development and sourcing process. It allows businesses to assess the quality, design, and functionality of a product before committing to large-scale production. Our sample evaluation service ensures that your products meet your exact specifications and requirements.
            </p>
            <p>
                We conduct thorough assessments of product samples to verify that they meet quality standards, production capabilities, and regulatory compliance. Whether you're launching a new product or switching suppliers, our expert evaluation ensures you make informed decisions.
            </p>
            <h2 className="wt-title mt-4 mb-4">Services Offered</h2>
            <div className="service-offered">
                <div className="media">
                    <img src={publicUrlFor("/assets/images/services/s1-1.jpg")} alt="Services Offered" />
                </div>
                <div className="service-offered-list">
                    <p>
                        Our sample evaluation services include the following:
                    </p>
                    <div className="tw-checked-list">
                        <ul>
                            <li>Design and Functional Evaluation</li>
                            <li>Material Quality and Durability Testing</li>
                            <li>Compliance with Industry Standards</li>
                            <li>Cost Effectiveness and Pricing Analysis</li>
                            <li>Packaging and Labeling Verification</li>
                            <li>Safety and Regulatory Compliance Checks</li>
                            <li>Manufacturing Capability Assessment</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
