import { Navigate, Outlet } from 'react-router-dom';
import { MyContext } from '../context/MyContext';
import { useContext } from 'react';
export const ProtectedRoute = ({children, redirectTo = "/home"}) => {
    const { userToken } = useContext(MyContext);

    if (!userToken) {
        return <Navigate to={redirectTo} />
    }

    return (
        <main>
            {
                children 
                ?? <Outlet />
            }
        </main>
    );

}