import { publicUrlFor } from "../../../globals/constants";

export default function SectionBlogContent({_data}) {
    return (
        <>
            <div className="blog-post-single bg-white">
                {/* Blog Heading */}
                <div className="wt-post-title">
                    <h1 className="post-title">The Role of Factory Audits in Ensuring Product Quality</h1>
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
                            In today's competitive global marketplace, ensuring the quality of products is paramount to a business's success. One of the most effective ways to guarantee product quality is by conducting factory audits. Factory audits are a crucial component of the supply chain management process, allowing companies to assess potential suppliers, identify risks, and ensure that manufacturing processes meet both regulatory standards and company-specific requirements.
                        </p>
                        <p>
                            Factory audits typically involve a thorough review of a factory's operational procedures, including quality control processes, production practices, labor conditions, and environmental compliance. By regularly auditing factories, businesses can identify any issues before they escalate into major problems, thereby reducing the risk of defective products reaching the market. Factory audits also help foster trust and transparency between businesses and their suppliers, promoting long-term, mutually beneficial relationships.
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
                            One of the main benefits of factory audits is the opportunity to evaluate the factory's quality control (QC) systems. A solid QC system ensures that products meet the required standards for durability, performance, and safety. The audit process involves reviewing the factory's testing methods, inspecting production samples, and verifying compliance with international product standards. Additionally, audits often include an assessment of worker safety conditions, ethical labor practices, and environmental sustainability efforts.
                        </p>
                        <p>
                            For businesses sourcing products from overseas, factory audits are especially important. They provide a way to verify that suppliers adhere to the highest quality standards, while also helping to mitigate risks such as supply chain disruptions, regulatory violations, or substandard production. At Source Huts, we emphasize the importance of factory audits in our sourcing strategy, ensuring that our clients receive high-quality products from reliable and ethical suppliers.
                        </p>
                    </div>
                    <div className="post-single-list">
                        <ul className="description-list">
                            <li>
                                <i className="fa fa-angle-right" />
                                Factory audits ensure that products meet international quality standards and regulatory requirements.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Audits help businesses identify risks early, preventing issues that could affect product quality or supply chain stability.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                A strong quality control system ensures that products are durable, safe, and meet performance expectations.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Regular factory audits promote transparency and build trust between businesses and suppliers.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Factory audits assess labor conditions and environmental practices, promoting ethical sourcing.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Source Huts integrates factory audits into our sourcing process, ensuring our clients receive reliable, high-quality products.
                            </li>
                        </ul>
                    </div>
                    <div className="wt-post-discription">
                        <blockquote>
                            <img src={publicUrlFor("/assets/images/quote-dark.png")} alt="#" />
                            <p>"Factory audits are the cornerstone of a robust quality assurance strategy. They provide valuable insights that help ensure product quality, ethical practices, and supplier reliability, ultimately protecting the brand and reputation of businesses."</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}
