import Banner from "../../sections/common/banner";

export default function PrivacyPolicyPage() {
    const data = {
        banner: {
            title: "Privacy Policy",
            subtitle: "Your Privacy Matters to Us",
            description: "Learn how Source Huts handles your personal information."
        },
        policy: {
            sections: [
                {
                    title: "1. Information We Collect",
                    content: "We collect personal information such as your name, email address, shipping details, and payment information when you place an order or sign up on our website."
                },
                {
                    title: "2. How We Use Your Information",
                    content: "Your data is used to process orders, improve our services, and provide personalized shopping experiences. We may also send promotional offers if you opt-in for marketing communications."
                },
                {
                    title: "3. Data Protection",
                    content: "We implement robust security measures to protect your personal information against unauthorized access, alteration, or disclosure."
                },
                {
                    title: "4. Sharing Information",
                    content: "We do not sell, trade, or rent your personal information to third parties. We may share data with trusted partners for order fulfillment and delivery purposes."
                },
                {
                    title: "5. Your Rights",
                    content: "You have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights."
                },
                {
                    title: "6. Updates to This Policy",
                    content: "We may update this Privacy Policy periodically. Changes will be posted on this page with the updated effective date."
                }
            ]
        }
    };

    return (
        <>
            <Banner _data={data.banner} />

            <div className="section-full p-t120 p-b90 tw-privacy-policy-area">
                <div className="container">
                    <div className="section-head center wt-small-separator-outer">
                        <div className="wt-small-separator site-text-primary">
                            <div>{data.banner.title}</div>
                        </div>
                        <h2 className="wt-title">{data.banner.subtitle}</h2>
                        <p className="section-head-text">{data.banner.description}</p>
                    </div>

                    <div className="section-content">
                        <div className="tw-privacy-policy-section">
                            {data.policy.sections.map((section, index) => (
                                <div key={index} className="privacy-policy-item">
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
