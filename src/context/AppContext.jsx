import { createContext, useState, useEffect, useContext } from "react";
import API from "../API";

export const AppProvider = createContext();

export const useToggle = () => {
    return useContext(AppProvider);
};

const AppContext = ({ children }) => {
    const [userData, setUserData] = useState({});

    // Login Status
    const setUserInfo = (data) => {
        setUserData(data);
        localStorage.setItem('user_id', data.uuid);
    };

    // set userdata from api when window reload
    useEffect(()=>{
        const userId = localStorage.getItem("user_id");
        API.user.personalInfo(userId).then(res => {
            const data = res.data;
            setUserData(data)
        })
    }, [])

    return (
        <AppProvider.Provider
            value={{
                setUserInfo,
                userData,
            }}>
            {children}
        </AppProvider.Provider>
    );
};

export default AppContext;
