import { Header } from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { Banner } from "./Banner";
import { Fragment } from "react";
import { Footer } from "./Footer";
//                    <div className="container mx-auto px-2 md:px-4 py-8">

export const PublicRoute = ({children}) => {
    const location = useLocation();
    return (
        <Fragment>
            <Header />
            <main>
                {
                    location.pathname === '/home' && <Banner />
                }
                <div className="container__wrapper">
                    {
                        children ?? <Outlet />
                    }
                </div>
            </main>
            <Footer />
        </Fragment>
    );
}