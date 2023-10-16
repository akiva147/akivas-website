// import { msalAuthenticationClient } from 'src/auth/msal.config';
import classes from './header.module.scss';

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
    return (
        <header className={classes.container}>
            <Title />
            <UserSection />
        </header>
    );
};

const Title = () => <h1>ניהול פתקים - פרויקט לדוגמא</h1>;

const UserSection = () => {
    // const handleLogout = () =>
    // 	msalAuthenticationClient.logoutFromLoggedInUser();

    return (
        <div className={classes.user}>
            {/* <span>{msalAuthenticationClient.getActiveAccount().username}</span> */}
            <button
                onClick={
                    () => console.log("can't disconnect yes (:)")
                    // handleLogout
                }
            >
                התנתקות
            </button>
        </div>
    );
};
