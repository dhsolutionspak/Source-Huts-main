import { publicUrlFor } from "../../../globals/constants";

export default function SectionBlogContent({_data}) {
    return (
        <>
            <div className="blog-post-single bg-white">
                {/* Blog Heading */}
                <div className="wt-post-title">
                    <h1 className="post-title">How Product Sourcing is Evolving in the Global Market</h1>
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
                            The landscape of global product sourcing has undergone significant transformations in recent years. As businesses expand their reach to international markets, the process of identifying, evaluating, and securing suppliers has evolved. From traditional procurement methods to advanced technological solutions, sourcing is no longer just about finding the cheapest option—it's about creating strategic partnerships and ensuring reliability, sustainability, and quality across the entire supply chain.
                        </p>
                        <p>
                            Today, businesses must navigate a complex web of suppliers, regulations, and logistical challenges to meet growing consumer demand. With advancements in technology, artificial intelligence (AI), and data analytics, sourcing has become a more informed and data-driven process. Source Huts, with its expertise in navigating these challenges, helps businesses stay ahead by leveraging the latest tools and techniques to optimize the product sourcing process.
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
                            One of the major drivers of this evolution is the rise of digital sourcing platforms, which streamline the process of finding and vetting suppliers. These platforms allow businesses to compare prices, check product specifications, and analyze supplier reliability in real-time. They also enable greater transparency, as companies can track orders, monitor quality, and ensure ethical sourcing practices throughout the supply chain.
                        </p>
                        <p>
                            Moreover, as sustainability becomes a growing priority for consumers and businesses alike, sourcing strategies have shifted to focus not just on cost-efficiency but also on environmental impact and social responsibility. Companies are increasingly looking for suppliers who can meet sustainability criteria, ensuring that the products they source are not only of high quality but also ethically produced.
                        </p>
                    </div>
                    <div className="post-single-list">
                        <ul className="description-list">
                            <li>
                                <i className="fa fa-angle-right" />
                                The global product sourcing landscape is shifting from price-driven to quality-driven strategies.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Technology and AI are transforming sourcing by enabling better supplier evaluations and cost predictions.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Digital sourcing platforms allow businesses to source products more efficiently and transparently.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Sustainability and ethical sourcing are becoming essential considerations for businesses and consumers.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                At Source Huts, we use advanced tools and data-driven approaches to help businesses source the best products globally.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                By integrating innovative sourcing strategies, Source Huts ensures your supply chain is resilient and future-proof.
                            </li>
                        </ul>
                    </div>
                    <div className="wt-post-discription">
                        <blockquote>
                            <img src={publicUrlFor("/assets/images/quote-dark.png")} alt="#" />
                            <p>"In today’s fast-paced global market, sourcing is not just about finding the best price, but about building a strategic, sustainable, and future-proof supply chain that drives long-term success."</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}
