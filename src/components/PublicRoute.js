import { Header } from "./header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { Banner } from "./Banner";

export const PublicRoute = ({children}) => {
    const location = useLocation();
    return (
        <main>
            <Header />
            {
                location.pathname === '/home' && <Banner />
            }
            <div className="container mx-auto px-2 md:px-4 py-8">
                {
                    children ?? <Outlet />
                }
            </div>
        </main>
    );
}