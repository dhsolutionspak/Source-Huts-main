import { Route, Routes } from "react-router-dom";

import Home1Page from "../app/components/home/index";
import AboutUsPage from "../app/components/misc/about-us";
import ContactPage from "../app/components/misc/contact-us";
import FaqPage from "../app/components/misc/faq";
import Error404Page from "../app/components/misc/error404";
import BlogGridPage from "../app/components/blogs/blog-grid";
import BlogsDetailPage from "../app/components/blogs/blog-detail";
import Services1Page from "../app/components/services/services1";
import Services2Page from "../app/components/services/services2";
import ServicesDetailPage1 from "../app/components/services/services-detail-1";
import ServicesDetailPage2 from "../app/components/services/services-detail-2";
import ServicesDetailPage3 from "../app/components/services/services-detail-3";
import ServicesDetailPage4 from "../app/components/services/services-detail-4";
import ServicesDetailPage5 from "../app/components/services/services-detail-5";
import ServicesDetailPage6 from "../app/components/services/services-detail-6";
import TrackaShipment from "../app/components/misc/track-a-shipment";

function AppRoutes() {
    return (
        <Routes>
            <Route path='/index' element={<Home1Page />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/faq' element={<FaqPage />} />
            <Route path='/error404' element={<Error404Page />} />
            <Route path='/services/services1' element={<Services1Page />} />
            <Route path='/services/services2' element={<Services2Page />} />
            <Route path='/services/detail-1' element={<ServicesDetailPage1 />} />
            <Route path='/services/detail-2' element={<ServicesDetailPage2 />} />
            <Route path='/services/detail-3' element={<ServicesDetailPage3 />} />
            <Route path='/services/detail-4' element={<ServicesDetailPage4 />} />
            <Route path='/services/detail-5' element={<ServicesDetailPage5 />} />
            <Route path='/services/detail-6' element={<ServicesDetailPage6 />} />
            <Route path='/blogs/grid' element={<BlogGridPage />} />
            <Route path='/blogs/detail' element={<BlogsDetailPage />} />
            <Route path='/contact-us' element={<ContactPage />} />
            <Route path='/track-a-shipment' element={<TrackaShipment />} />
            <Route path='*' element={<Error404Page/>} />
            <Route element={<Error404Page/>} />
        </Routes>
    )
}

export default AppRoutes;