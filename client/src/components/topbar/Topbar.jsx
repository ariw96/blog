import "./topbar.css";

function Topbar() {
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
					<div className="topListItem">HOME</div>
					<div className="topListItem">ABOUT</div>
					<div className="topListItem">CONTACT</div>
					<div className="topListItem">WRITE</div>
					<div className="topListItem">LOGOUT</div>
				</div>
			</div>
			<div className="topRight">
				<img
					className="topImg"
					src="https://cdn2.iconfinder.com/data/icons/hacker-filled-line/100/hacker_hacker_human_-512.png"
					alt=""
				/>
				<i className="topSearchIcon fas fa-search"></i>
			</div>
		</div>
	);
}

export default Topbar;
