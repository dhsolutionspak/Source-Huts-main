import { global } from "../constants";

export const data = {
    banner: {
        background: global.banner + "1.jpg",
        title: "Our Services ",
        crumb: "Our Services"
    },

    services: {
        title: "All services",
        subtitle: "Trusted For Our Services",
        description: "SOURCEHUTS offers a comprehensive range of services designed to meet the needs of your business worldwide..",
        services: [
            {
                icon: global.icons + "pic1.png",
                serial: "01",
                title: "Freight Forwarding",
                description: "We offer safe, quick, and easy ways to ship products around the world according to your requirements."
            },
            {
                icon: global.icons + "pic2.png",
                serial: "02",
                title: "Product Sourcing",
                description: "Our service connects you with reliable sellers so that you can get what you need quickly and cheaply."
            },
            {
                icon: global.icons + "pic3.png",
                serial: "03",
                title: "Factory Audit",
                description: "We make sure the quality of the products, that they meet standards, and that they come from reliable sources."
            },
            {
                icon: global.icons + "pic4.png",
                serial: "04",
                title: "Inspection",
                description: "We check the quality of the products and make sure our inventory inspection meets your standards."
            },
            {
                icon: global.icons + "pic5.png",
                serial: "05",
                title: "Sample Evaluation",
                description: "Our customized sample checking service is to make sure they meet your specific needs."
            },
            {
                icon: global.icons + "pic6.png",
                serial: "06",
                title: "Media Production",
                description: "We aim to make high-quality images and videos that show off your products well."
            }
        ]
    },

    estimation: {
        title: "Estimation",
        subtitle: "Has a wide range of solutions",
        description: "Estimation at SourceHut encompasses a wide range of tailored solutions.",
        solutions: [
            {
                serial: "01",
                icon: global.eicons + "pic1.png",
                title: "Solutions and specialized",
                description: "Our aim is to optimize and improve your supply chain so that we can give you the best service"
            },
            {
                serial: "02",
                icon: global.eicons + "pic2.png",
                title: "Multiple warehouses",
                description: "We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind..."
            },
            {
                serial: "03",
                icon: global.eicons + "pic3.png",
                title: "Tracking made easy",
                description: "A tracking number for the entire process. so that you can find the exact position. this process will help you"
            }
        ]
    },

    booking: {
        background: global.booking + "bg-map.png",
        image: global.booking + "pic1.png",
        imageBack: "",
        title: "Request A Quote",
        subtitle: "Booking For Product Transformation",
        description: "Seamlessly transform your products with our expert booking services designed for innovation and growth.",
        form: {
            quote: global.booking + "icon1.png",
            track: global.booking + "icon2.png"
        }
    },

    plans: {
        title: "Our Plan",
        subtitle: "The right price for you whoever you are",
        plans: [
            {
                type: "Startup",
                price: "90$",
                benifits: [
                    "Additional",
                    "Warehouing",
                    "Custos Borkerage",
                    "Unlimited Transfer"
                ]
            },
            {
                type: "Standard",
                price: "150$",
                benifits: [
                    "Additional",
                    "Warehouing",
                    "Custos Borkerage",
                    "Unlimited Transfer"
                ]
            },
            {
                type: "Business",
                price: "260$",
                benifits: [
                    "Additional",
                    "Warehouing",
                    "Custos Borkerage",
                    "Unlimited Transfer"
                ]
            }
        ]
    }
}