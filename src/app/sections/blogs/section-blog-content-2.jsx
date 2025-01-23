import { publicUrlFor } from "../../../globals/constants";

export default function SectionBlogContent({_data}) {
    return (
        <>
            <div className="blog-post-single bg-white">
                {/* Blog Heading */}
                <div className="wt-post-title">
                    <h1 className="post-title">Why Quality Control is Key in Sourcing: A Source Huts Perspective</h1>
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
                            Quality control is at the heart of every successful sourcing operation, and at Source Huts, we understand its vital importance in the supply chain. As businesses increasingly rely on global suppliers for product sourcing, ensuring that products meet strict quality standards is not just a necessity—it’s a strategic advantage. 
                        </p>
                        <p>
                            Source Huts takes pride in offering a comprehensive quality control process that evaluates suppliers at every stage of production. From pre-production assessments to in-line inspections and final product checks, we are committed to making sure that every product sourced meets international standards and satisfies our clients' needs.
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
                            Without robust quality control measures, sourcing becomes a risky and uncertain endeavor. Inconsistent product quality, delays in production, and costly returns can quickly damage a brand’s reputation. By integrating quality control into the sourcing process, Source Huts helps mitigate these risks, ensuring that every product is vetted for performance, durability, and compliance before it reaches the market.
                        </p>
                        <p>
                            We believe that quality control is not only about meeting expectations but exceeding them. Our team of experts conducts thorough audits and tests to ensure that the products meet the highest industry standards. This proactive approach not only reduces the risk of defective products but also enhances the reputation of our clients in the global market.
                        </p>
                    </div>
                    <div className="post-single-list">
                        <ul className="description-list">
                            <li>
                                <i className="fa fa-angle-right" />
                                Source Huts integrates quality control at every stage of the sourcing process.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                From pre-production assessments to final inspections, we ensure top-quality products.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                By adhering to international quality standards, we help businesses reduce sourcing risks.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Quality control ensures consistency in product performance and customer satisfaction.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                With Source Huts, businesses can confidently rely on trusted suppliers for quality products.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Our quality control process enhances your supply chain, improving product reliability.
                            </li>
                        </ul>
                    </div>
                    <div className="wt-post-discription">
                        <blockquote>
                            <img src={publicUrlFor("/assets/images/quote-dark.png")} alt="#" />
                            <p>"At Source Huts, we believe that quality is not just a promise; it’s a guarantee. Every product we source meets the highest standards, ensuring long-term success for our clients."</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}
