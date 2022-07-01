import "./topbar.css";
import { NavLink } from "react-router-dom";

function Topbar() {
	const user = false;
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fab fa-facebook-square"></i>
				<i className="topIcon fab fa-instagram-square"></i>
				<i className="topIcon fab fa-pinterest-square"></i>
				<i className="topIcon fab fa-twitter-square"></i>
			</div>
			<div className="topCenter">
				<div className="topList">
					<NavLink to="/" className="link">
						<div className="topListItem">HOME</div>
					</NavLink>
					<NavLink to="/about" className="link">
						<div className="topListItem">ABOUT</div>
					</NavLink>
					<NavLink to="/contact" className="link">
						<div className="topListItem">CONTACT</div>
					</NavLink>
					<NavLink to="/write" className="link">
						<div className="topListItem">WRITE</div>
					</NavLink>
					<div className="topListItem">{user && "LOGOUT"}</div>
				</div>
			</div>
			<div className="topRight">
				{user ? (
					<>
						<img
							className="topImg"
							src="https://cdn2.iconfinder.com/data/icons/hacker-filled-line/100/hacker_hacker_human_-512.png"
							alt=""
						/>
					</>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<NavLink to="/login" className="link">
								Login
							</NavLink>
						</li>
						<li className="topListItem">
							<NavLink to="/register" className="link">
								Register
							</NavLink>
						</li>
					</ul>
				)}
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}

export default Topbar;
