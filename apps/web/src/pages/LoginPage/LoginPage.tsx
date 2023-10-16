// import { useMsal } from '@azure/msal-react';
import classes from './login-page.module.scss';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
    // const { instance } = useMsal();

    // const handleLogin = async () => {
    // 	const requestObj = {
    // 		scopes: ['openid'],
    // 	};

    // 	await instance.loginRedirect(requestObj);
    // };

    return (
        <div className={classes.container}>
            <h1>{'ברוכים הבאים לאתר שלי :)'}</h1>
            <button
                onClick={
                    // handleLogin
                    () => {}
                }
            >
                התחברות
            </button>
        </div>
    );
};
