import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const user = false;
	return (
		<>
			<Router>
				<Topbar />
				<Routes>
					<Route path="/" element={user ? <Home /> : <Register />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={user ? <Login /> : <Register />} />

					<Route path="/write" element={user ? <Write /> : <Register />} />
					<Route path="/settings" element={user ? <Setting /> : <Register />} />
					<Route path="post">
						<Route path=":id" element={user ? <Single /> : <Register />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
