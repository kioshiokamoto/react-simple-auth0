import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
	const { user, isAuthenticated, isLoading } = useAuth0();
	return (
		<div>
			<h1>Test Auth0</h1>
			<hr />
			<div>
				<Profile />
			</div>

			{!isAuthenticated ? <LoginButton /> : <LogoutButton />}
		</div>
	);
}

export default App;
