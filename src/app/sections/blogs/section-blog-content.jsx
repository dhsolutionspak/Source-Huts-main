import { publicUrlFor } from "../../../globals/constants";

export default function SectionBlogContent({_data}) {
    return (
        <>
            <div className="blog-post-single bg-white">
                {/* Blog Heading */}
        

                <div className="wt-post-info">
                    <div className="wt-post-media m-b30">
                        <img src={_data.image} alt="#" />
                    </div>
                    <div className="wt-post-title">
                    <h1 className="post-title">How Source Huts is Revolutionizing Global Sourcing and Procurement</h1>
                </div>
                    <div className="wt-post-discription">
                        <p>
                            In today's rapidly changing business environment, sourcing and procurement play a crucial role in maintaining operational efficiency and ensuring a competitive edge. Source Huts is redefining the global sourcing and procurement landscape by offering businesses a streamlined platform that connects them with the best manufacturers worldwide. With our technology-driven approach, we ensure cost savings, product quality, and a seamless supply chain experience.
                        </p>
                        <p>
                            At Source Huts, we provide businesses with access to a vast network of trusted suppliers from various industries. Our platform allows users to easily compare suppliers, evaluate their capabilities, and negotiate deals directly. By using advanced data analytics, we help businesses make informed decisions that align with their strategic goals and sustainability objectives.
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
                            By leveraging cutting-edge technology, Source Huts enables businesses to manage risks associated with procurement by providing real-time data on supplier performance, product quality, and compliance. With a focus on transparency, we help businesses build long-term relationships with their suppliers, ensuring a smooth and efficient procurement process from start to finish.
                        </p>
                    </div>
                    <div className="post-single-list">
                        <ul className="description-list">
                            <li>
                                <i className="fa fa-angle-right" />
                                Empowering businesses with technology to streamline sourcing and procurement.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Creating global networks to find the best manufacturers at competitive prices.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Driving supply chain efficiency through real-time data and analytics.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Enhancing sustainability by helping businesses make ethical sourcing decisions.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Reducing procurement risks and costs with transparent supplier relationships.
                            </li>
                            <li>
                                <i className="fa fa-angle-right" />
                                Supporting businesses in building long-term, reliable supplier partnerships.
                            </li>
                        </ul>
                    </div>
                    <div className="wt-post-discription">
                        <blockquote>
                            <img src={publicUrlFor("/assets/images/quote-dark.png")} alt="#" />
                            <p>"Source Huts is not just a sourcing platform; it is a strategic partner that helps businesses stay ahead in the global market."</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}
