import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
	return (
		<>
			<h1>Test Auth0</h1>
			<hr />
			<div>
				<Profile />
			</div>
			<div>
				<LoginButton />
				<LogoutButton />
			</div>
		</>
	);
}

export default App;
