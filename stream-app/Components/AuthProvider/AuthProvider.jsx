'use client';

import { Provider } from "react-redux";
import store from "../store";
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>
    );
}

export default AuthProvider;