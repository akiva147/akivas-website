import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate,
} from '@azure/msal-react';
import { AuthenticatedRoutes } from './AuthenticatedRoutes';
import { PublicRoutes } from './PublicRoutes';

export interface SwitchboardProps {}

export const Switchboard: React.FC<SwitchboardProps> = () => (
    <>
        {/* <AuthenticatedTemplate> */}
        <AuthenticatedRoutes />
        {/* </AuthenticatedTemplate> */}
        {/* <UnauthenticatedTemplate> */}
        <PublicRoutes />
        {/* </UnauthenticatedTemplate> */}
    </>
);
