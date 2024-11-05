import React, {createContext, useState } from 'react'

export const LoginContext = createContext();

const LoginContextProvider = ({children}) => {

    const [userDetails, setUserDetails] = useState(true)

    return (
        <div>
                <LoginContext.Provider value={userDetails}>
                    {children}
                </LoginContext.Provider>
        </div>
    );
};

export default LoginContextProvider;