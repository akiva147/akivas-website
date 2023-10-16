import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './AuthProvider';

const queryClient = new QueryClient();
export interface GlobalProviderProps {
    children?: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => (
    // <AuthProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    // </AuthProvider>
);
