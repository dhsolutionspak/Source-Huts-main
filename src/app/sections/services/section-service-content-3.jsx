import { publicUrlFor } from "../../../globals/constants";

export default function SectionServiceContent() {
    return (
        <>
            <div className="service-category-title">
                <div className="service-category-media">
                    <img src={publicUrlFor("/assets/images/icons/pic7.png")} alt="Factory Audit Icon" />
                </div>
                <h2>Factory Audit</h2>
            </div>
            <div className="wt-media">
                <img src={publicUrlFor("/assets/images/services/s3.jpeg")} alt="Factory Audit" />
            </div>
            <h2 className="wt-title mt-4 mb-4">Ensure Quality with Professional Factory Audits</h2>
            <p>
                A factory audit is essential for businesses to ensure they are working with reliable and compliant manufacturing partners. Our factory audit services provide an in-depth evaluation of production facilities to confirm their capabilities, quality standards, and compliance with industry regulations.
            </p>
            <p>
                With our comprehensive factory audits, you can mitigate risks, identify potential issues before they arise, and build stronger relationships with trusted suppliers. Trust us to deliver transparent, detailed reports to empower your decision-making process.
            </p>
            <h2 className="wt-title mt-4 mb-4">Services Offered</h2>
            <div className="service-offered">
                <div className="media">
                    <img src={publicUrlFor("/assets/images/services/s1-1.jpg")} alt="Services Offered" />
                </div>
                <div className="service-offered-list">
                    <p>
                        Our factory audit services include the following:
                    </p>
                    <div className="tw-checked-list">
                        <ul>
                            <li>Production Capability Assessment</li>
                            <li>Quality Control System Evaluation</li>
                            <li>Workplace Safety and Compliance Checks</li>
                            <li>Ethical and Social Responsibility Audits</li>
                            <li>Supplier Verification and Validation</li>
                            <li>Process Improvement Recommendations</li>
                            <li>Detailed Factory Audit Reports</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
