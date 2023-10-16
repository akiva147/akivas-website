// import { msalAuthenticationClient } from '@/auth/msal.config';
import { MsalProvider } from '@azure/msal-react';
import { ReactNode } from 'react';

interface AuthProviderProps {
    children?: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => (
    <></>
    // <MsalProvider instance={msalAuthenticationClient.pca}>
    //     {children}
    // </MsalProvider>
);
