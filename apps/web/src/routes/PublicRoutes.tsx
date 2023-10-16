import { LoginPage } from '@/pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export interface PublicRoutesProps { }

export const PublicRoutes: React.FC<PublicRoutesProps> = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LoginPage />} />
		</Routes>
	</BrowserRouter>
);
