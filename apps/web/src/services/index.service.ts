import axios from 'axios';
// import { msalAuthenticationClient } from 'src/auth/msal.config';

const serverUrl = import.meta.env.VITE_BACKEND_LOCATION as string | undefined;

if (!serverUrl) {
    throw Error('no server url; check your env.');
}

export const authenticatedInstance = axios.create({
    baseURL: serverUrl,
});

/**
 * Async function for making API Request
 * @returns Instance Of Axios Object With Auth Header on it
 */
export const apiRequestWithAuthToken = async () => {
    // JWT Token (Token ID) Retrieved From Msal v2.0 API
    // const idToken: string = await msalAuthenticationClient.acquireIdToken();

    // authenticatedInstance.defaults.headers.common[
    //     'Authorization'
    // ] = `Bearer ${idToken}`;

    return authenticatedInstance;
};

authenticatedInstance.interceptors.request.use(async (config) => {
    await apiRequestWithAuthToken();
    return config;
});

authenticatedInstance.interceptors.response.use(async (response) => {
    if (response.status === 401) {
        await apiRequestWithAuthToken();
        location.reload();
    }
    return response;
});
