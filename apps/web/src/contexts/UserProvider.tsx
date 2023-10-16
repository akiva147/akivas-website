// import { msalAuthenticationClient } from '@/auth/msal.config';
import { AccountInfo } from '@azure/msal-common';
import { createContext, useState } from 'react';

export interface UserContextProps {
    currentUser: AccountInfo | undefined;
}

export const UserContext = createContext<UserContextProps>({
    currentUser: undefined,
});

export interface UserProviderProps {
    children?: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [currentUser] = useState<AccountInfo | undefined>();
    // msalAuthenticationClient.getActiveAccount()

    return (
        <UserContext.Provider value={{ currentUser }}>
            {children}
        </UserContext.Provider>
    );
};
