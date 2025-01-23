import { publicUrlFor } from "../../../globals/constants";

export default function SectionServiceContent() {
    return (
        <>
            <div className="service-category-title">
                <div className="service-category-media">
                    <img src={publicUrlFor("/assets/images/icons/pic7.png")} alt="Photography & Videography Icon" />
                </div>
                <h2>Photography & Videography</h2>
            </div>
            <div className="wt-media">
                <img src={publicUrlFor("/assets/images/services/s6.jpg")} alt="Photography & Videography" />
            </div>
            <h2 className="wt-title mt-4 mb-4">Capture Your Products in Stunning Detail</h2>
            <p>
                High-quality images and videos are essential for showcasing your products effectively. Whether you're selling online or marketing to potential clients, professional photography and videography can make your products stand out and drive sales. Our team provides expert services for product photography and promotional videos tailored to your brand.
            </p>
            <p>
                From crisp, clear product shots to dynamic video content, we ensure that every visual element aligns with your brand's story and marketing goals. Let us help you create content that engages your audience and highlights your products in the best light.
            </p>
            <h2 className="wt-title mt-4 mb-4">Services Offered</h2>
            <div className="service-offered">
                <div className="media">
                    <img src={publicUrlFor("/assets/images/services/s1-1.jpg")} alt="Services Offered" />
                </div>
                <div className="service-offered-list">
                    <p>
                        Our photography & videography services include the following:
                    </p>
                    <div className="tw-checked-list">
                        <ul>
                            <li>Product Photography (Studio & Lifestyle Shots)</li>
                            <li>Product Videography (Short & Detailed Videos)</li>
                            <li>360° Product Photography</li>
                            <li>Custom Product Photo Shoots</li>
                            <li>Video Editing and Post-Production</li>
                            <li>Promotional and Commercial Video Production</li>
                            <li>Social Media & E-Commerce Content Creation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
