import Banner from "../../sections/common/banner";

export default function TermsAndConditionsPage() {
    const data = {
        banner: {
            title: "Terms and Conditions",
            subtitle: "Understand the Rules for Using Source Huts",
            description: "These terms govern your use of Source Huts' services."
        },
        terms: {
            sections: [
                {
                    title: "1. Acceptance of Terms",
                    content: "By accessing and using Source Huts, you agree to comply with these Terms and Conditions. If you do not agree, please refrain from using our services."
                },
                {
                    title: "2. Use of Services",
                    content: "You are responsible for maintaining the confidentiality of your account information and for all activities under your account."
                },
                {
                    title: "3. Intellectual Property",
                    content: "All content on Source Huts, including text, graphics, logos, and software, is the property of Source Huts and protected by intellectual property laws."
                },
                {
                    title: "4. Orders and Payments",
                    content: "All orders placed through our website are subject to availability and confirmation. We reserve the right to refuse or cancel any order for any reason."
                },
                {
                    title: "5. Limitation of Liability",
                    content: "Source Huts is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services."
                },
                {
                    title: "6. Governing Law",
                    content: "These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction where Source Huts operates."
                }
            ]
        }
    };

    return (
        <>
            <Banner _data={data.banner} />

            <div className="section-full p-t120 p-b90 tw-terms-conditions-area">
                <div className="container">
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>{data.banner.title}</div>
                        </div>
                        <h2 className="wt-title">{data.banner.subtitle}</h2>
                        <p className="section-head-text">{data.banner.description}</p>
                    </div>

                    <div className="section-content">
                        <div className="tw-terms-conditions-section">
                            {data.terms.sections.map((section, index) => (
                                <div key={index} className="terms-conditions-item">
                                    <h3>{section.title}</h3>
                                    <p>{section.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
