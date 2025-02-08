import SectionSideContact from "./section-side-contact";
import SectionSideGallery from "./section-side-gallery";


import SectionSideServices from "./section-side-services";

import { data } from "../../../globals/data/sidebar";

export default function SectionSidebar() {
    return (
        <>

<div className="sidebar-spacing" style={{ height: "100px" }}></div>


           
            <SectionSideServices _data={data.allservices} />
     
            <SectionSideGallery _data={data.gallery} />

            <SectionSideContact />
        </>
    )
}