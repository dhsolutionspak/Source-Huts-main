import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../app/sections/common/header";
import Footer1 from "../app/sections/common/footer1";
import Footer2 from "../app/sections/common/footer2";
import AppRoutes from "../routing/app-routes";

export default function RootLayout() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isErrorPage = pathname.startsWith('/error');
    const isIndexPage = pathname === "/index";

    // ✅ Redirect only from "/" to "/index"
    useEffect(() => {
        if (pathname === "/") {
            navigate("/index", { replace: true }); // Redirect without adding to history
        }
    }, [pathname, navigate]);

    return (
        <div className="page-wrapper">
            {/* Header */}
            {!isErrorPage && <Header />}

            {/* Main Content */}
            <div className="page-content">
                <AppRoutes />
            </div>

            {/* Footer */}
            {!isErrorPage && (isIndexPage ? <Footer2 /> : <Footer1 />)}

            {/* Scroll to Top Button */}
            <button className="scroll-top">
                <span className="fa fa-angle-up" id="btn-vibrate"></span>
            </button>
        </div>
    );
}
