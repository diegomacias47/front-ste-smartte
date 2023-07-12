import { useState } from "react";
import { MyContext } from "./MyContext";

export const ContextComponent = ({ children }) => {
    const [userToken, setUserToken] = useState(null);        

    const loadUserToken = (token) => {
        setUserToken(token);
    }

    const getUserToken = () => {
        return userToken;
    }

    const removeUserToken = () => {
        setUserToken(null);
    }

    return (
        <MyContext.Provider
            value={{userToken, loadUserToken, getUserToken, removeUserToken}}
        >
            { children }
        </MyContext.Provider>
    );
};
