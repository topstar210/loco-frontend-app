import { createContext, useState, useContext } from "react";

export const AppProvider = createContext();

export const useToggle = () => {
    return useContext(AppProvider);
};

const AppContext = ({ children }) => {
    const [isLogin, setisLogin] = useState(false);

    // Login Status
    const handleLogin = () => {
        setisLogin(!isLogin);
    };

    return (
        <AppProvider.Provider
            value={{
                handleLogin,
                isLogin,
            }}>
            {children}
        </AppProvider.Provider>
    );
};

export default AppContext;
