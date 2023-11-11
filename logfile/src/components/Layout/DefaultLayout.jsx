import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = () => {
    return (
        <div className="mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default DefaultLayout;
