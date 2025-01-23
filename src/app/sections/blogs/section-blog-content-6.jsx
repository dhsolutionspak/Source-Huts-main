import { publicUrlFor } from "../../../globals/constants";

export default function SectionBlogContent({_data}) {
    return (
        <>
            <div className="blog-post-single bg-white">
                {/* Blog Heading */}
                <div className="wt-post-title">
                    <h1 className="post-title">Photography and Videography: Capturing Your Products in the Best Light</h1>
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
                            In the modern e-commerce and retail landscape, high-quality product photography and videography are more important than ever. In a world where customers cannot physically touch or feel the products, visuals are the next best thing. Well-executed photography and videography not only showcase the features and benefits of your products but also communicate your brand's values and create an emotional connection with your audience.
                        </p>
                        <p>
                            High-quality images and videos can have a significant impact on the way your customers perceive your products. They help to highlight product features, textures, and quality, which builds trust and encourages purchasing decisions. Additionally, visually appealing content is more likely to be shared on social media, driving more traffic to your website or online store.
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
                            At Source Huts, we understand the importance of great product visuals, which is why we offer professional photography and videography services tailored to your needs. Our team of experts uses the latest techniques and equipment to capture your products in the best light, ensuring that every detail is showcased in a way that resonates with your target audience. Whether it's a close-up shot that highlights the intricate details of your product, or a dynamic video that tells your brand's story, we ensure that your visuals stand out.
                        </p>
                        <p>
                            We also understand the power of storytelling through visuals. Our videography services can help tell the story behind your brand, showcase the manufacturing process, or demonstrate how your products can be used in real-world scenarios. Videos help build a deeper connection with your audience, allowing them to see your products in action and imagine how they can fit into their lives.
                        </p>
                    </div>
                    <div className="post-single-list">
                        <ul className="description-list">
                            <li>
                                <i className="fa fa-angle-right" />
                                High-quality product photography and videography are essential for building trust and boosting sales.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Great visuals help highlight product features, quality, and texture, allowing customers to make informed purchasing decisions.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Professionally shot product photos and videos are more likely to be shared on social media, driving traffic to your online store.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                At Source Huts, we use the latest techniques and equipment to create stunning visuals that resonate with your audience.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Our videography services tell your brand's story and demonstrate your products in action, helping you connect with your audience.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Great product photography and videography can significantly enhance your brand’s online presence and boost conversions.
                            </li>
                        </ul>
                    </div>
                    <div className="wt-post-discription">
                        <blockquote>
                            <img src={publicUrlFor("/assets/images/quote-dark.png")} alt="#" />
                            <p>"In the digital age, product photography and videography are more than just visual representations; they are powerful tools that can influence consumer behavior, build trust, and elevate a brand’s online presence."</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}
