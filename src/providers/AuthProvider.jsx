import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    console.log(children);

    const authInfo = {
        name: 'imran '
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;