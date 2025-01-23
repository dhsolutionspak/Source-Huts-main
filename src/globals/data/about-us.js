import { global } from "../constants";

export const data = {
    banner: {
        background: global.banner + "1.jpg",
        title: "About Us",
        crumb: "About Us"
    },

    whatwedo: {
        title: "What we do!",
        subtitle: "What Sets SOURCEHUTS Apart From Others",
        description: "SOURCEHUTS stands out because of our advanced transportation, multiple warehouses, and real-time tracking, which makes us the most efficient and reliable company.",
        image: global.icons + "img1.png",
        works: [
            {
                icon: global.icons + "pic1.png",
                serial: "01.",
                title: "Real-Time Tracking:",
                description: "It is an advanced tracking technology that lets you monitor and manage your packages at all times."
            },
            {
                icon: global.icons + "pic2.png",
                serial: "02.",
                title: "Multiple Warehouses:",
                description: "With multiple stores placed in strategic places around the world, shipping is faster and more flexible."
            },
            {
                icon: global.icons + "pic3.png",
                serial: "03.",
                title: "End-to-End Service:",
                description: "From cargo inventory inspection to final delivery, everything is managed securely."
            }
        ]
    },

    achivements: [
        {
            count: "12",
            title: "Warehouses in U.S.A"
        },
        {
            count: "15",
            title: "Year of experience work with U.S.A"
        },
        {
            count: "60",
            title: "Kg Minimum lot valume"
        }
    ],

    testimonials: {
        title: "Respected",
        subtitle: "Clients & partners",
        clients: [
            global.logo + "/w1.png",
            global.logo + "/w2.png",
            global.logo + "/w3.png",
            global.logo + "/w4.png",
            global.logo + "/w5.png",
            global.logo + "/w6.png",
        ],
        partners: [
            {
                pic: global.testim + "pic1.jpg",
                quote: "They made a huge difference in our supply chain. Now that there is real-time tracking and more than one central site, everything works so much better. Strongly recommended!",
                name: "Emma Martinez",
                designation: "Client",
            },
            {
                pic: global.testim + "pic2.jpg",
               quote: "We've worked with sourcehuts for a while now, and their service has been great. Logistics are a lot easier for us because of good contact and help.",
                name: "Alyson Johnson",
                designation: "Client",
            },
            {
                pic: global.testim + "pic3.jpg",
                quote: "SOURCEHUTS has completely changed the way we run our business. They saved us time and money by giving us answers that were specific to our needs.",
                name: "Zhao Lin",
                designation: "Client",
            },
            {
                pic: global.testim + "pic4.jpg",
                quote: "I love how well SourceHuts works! Their tracking system keeps me up to date every step of the way, and the fact that they have various warehouse choices has made my operations run much more easily.",
                name: "Li Xiaojun",
                designation: "Client",
            }
        ]
    },

    blogs: {
        title: "Our Blogs",
        subtitle: "Recent news & events",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.",
        blogs: [
            {
                image: global.blog1 + "bg1.jpg",
                day: "02",
                month: "Aug",
                title: "At the end of the day, going forward, a new normal that has evolved from.",
                description: "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit."
            },
            {
                image: global.blog2 + "l-1.jpg",
                day: "08",
                month: "Aug",
                title: "How all this mistaken idea denouncing pleasure and praising pain was.",
                description: "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit."
            },
            {
                image: global.blog1 + "bg3.jpg",
                day: "21",
                month: "Aug",
                title: "Going forward, a new normal that has evolved from generation.",
                description: "New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit."
            }
        ]
    },

    approach: {
        title: "Company Approch",
        subtitle: "Reliable Logistic & Transport Solutions",
        yearsOfExperience: "35",
        specifications: [
            {
                icon: global.icons + "c-pic1.png",
                count: "195",
                title: "Professional Staff"
            },
            {
                icon: global.icons + "c-pic2.png",
                count: "250",
                title: "On Time Delievery"
            },
            {
                icon: global.icons + "c-pic3.png",
                count: "350",
                title: "Technology and Media"
            }
        ]
    }
}