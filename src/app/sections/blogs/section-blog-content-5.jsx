import { publicUrlFor } from "../../../globals/constants";

export default function SectionBlogContent({_data}) {
    return (
        <>
            <div className="blog-post-single bg-white">
                {/* Blog Heading */}
                <div className="wt-post-title">
                    <h1 className="post-title">Inspection Services: Ensuring Products Meet Global Standards</h1>
                </div>

                <div className="wt-post-info">
                    <div className="wt-post-media m-b30">
                        <img src={_data.image} alt="#" />
                    </div>
                    <div className="wt-post-title ">
                        <div className="wt-post-meta-list">
                            <div className="wt-list-content post-date">{_data.day} {_data.month}, {_data.year}</div>
                            <div className="wt-list-content post-comment">Comment {_data.commentsCount}</div>
                            <div className="wt-list-content post-view">Views {_data.views}</div>
                        </div>
                        <h3 className="post-title">{_data.title}</h3> {/* Blog post title */}
                    </div>
                    <div className="wt-post-discription">
                        <p>
                            In today’s globalized marketplace, ensuring that products meet international standards is critical for businesses looking to expand their reach and build a reputation for quality. One of the most effective ways to guarantee that products meet these global standards is through inspection services. These services are a vital part of the product sourcing and manufacturing process, helping companies assess the quality of their products before they are shipped to customers.
                        </p>
                        <p>
                            Product inspection services involve a detailed evaluation of products during various stages of production, from raw materials to finished goods. These inspections ensure that the products adhere to both the client's specifications and the required international standards. Through inspection services, companies can identify defects, ensure consistency, and verify that products meet safety requirements.
                        </p>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="one-column1 mb-3">
                                    <div className="wt-media">
                                        <img src={publicUrlFor("/assets/images/blog/blog-single/thumb/pic1.jpg")} alt="#" className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="one-column2 mb-3">
                                    <div className="wt-media">
                                        <img src={publicUrlFor("/assets/images/blog/blog-single/thumb/pic2.jpg")} alt="#" className="img-responsive" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p>
                            The primary objective of inspection services is to prevent defective products from reaching the market. There are several types of inspections that can be performed depending on the stage of production and the nature of the product. Pre-production inspections focus on evaluating the raw materials and components before production begins. During production inspections monitor the manufacturing process to ensure quality control at every step. Finally, pre-shipment inspections take place just before the products are packed and shipped, ensuring they meet all quality and safety standards.
                        </p>
                        <p>
                            At Source Huts, we offer comprehensive inspection services to ensure that our clients’ products meet global quality standards. Our expert inspectors perform thorough checks at various stages of production, identifying any issues early on and providing solutions to address them before shipment. Whether it’s inspecting materials, checking workmanship, or verifying compliance with international standards, our inspection services help businesses mitigate risks and ensure that only the highest-quality products reach their customers.
                        </p>
                    </div>
                    <div className="post-single-list">
                        <ul className="description-list">
                            <li>
                                <i className="fa fa-angle-right" />
                                Inspection services help companies ensure products meet international quality standards.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Various types of inspections are performed during different stages of production: pre-production, in-process, and pre-shipment.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Inspections help identify defects early, preventing substandard products from reaching the market.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Source Huts offers comprehensive inspection services to ensure quality and regulatory compliance.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Our expert inspectors check raw materials, manufacturing processes, and finished goods for quality control.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Effective inspection services reduce risks and help businesses maintain their brand reputation.
                            </li>
                        </ul>
                    </div>
                    <div className="wt-post-discription">
                        <blockquote>
                            <img src={publicUrlFor("/assets/images/quote-dark.png")} alt="#" />
                            <p>"Inspection services are critical in ensuring that products meet global standards. By thoroughly evaluating products at various stages of production, businesses can guarantee that their products are of the highest quality and comply with safety and regulatory requirements."</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}
