import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from "../pages/home/Home";
import { Login } from "../pages/login/Login";
import { School } from "../pages/school/School";
import { MyRoutes } from "../pages/my-routes/MyRoutes";
import { Reserve } from "../pages/reserve-form/Reserve";
import { Account } from "../pages/account/Account";
import { Payment } from "../pages/payment/Payment";

export const RoutesIndex = () => {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path='/home' element={<Home />} ></Route>
                <Route path='/schools' element={<School />} ></Route>
                <Route path='/routes' element={<MyRoutes />}></Route>
                <Route path='/login' element={<Login />} ></Route>
                <Route path='/reservation' element={<Reserve />} ></Route>
                <Route path='/payment' element={<Payment />} ></Route>
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path='/account' element={<Account />} ></Route>
            </Route>
            <Route
                path="*"
                element={<Navigate to="/home" replace />}
            />
        </Routes>
    );
}