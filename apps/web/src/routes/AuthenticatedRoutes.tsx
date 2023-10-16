
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import { Notes } from 'src/components/Notes';
import { LoginPage } from 'src/pages/LoginPage';

export interface AuthenticatedRoutesProps { }

export const AuthenticatedRoutes: React.FC<AuthenticatedRoutesProps> = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Layout />} >
				<Route path="/" element={<Navigate to="/notes" />} />
				<Route path="/notes" element={<Notes />} />
			</Route>
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	</BrowserRouter>
);
