import "./sidebar.css";

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebar">ABOUT ME</span>
				<img
					src="https://upload.wikimedia.org/wikipedia/he/a/a9/MarioNSMBUDeluxe.png"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
					quisquam quis dicta nisi rerum consectetur tempora, qui natus iste
					iure distinctio voluptatum eligendi dolores aliquam, neque voluptatem
					in obcaecati! Explicabo?
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					<li className="sidebarListItem">Life</li>
					<li className="sidebarListItem">Sports</li>
					<li className="sidebarListItem">Tech</li>
					<li className="sidebarListItem">Music</li>
					<li className="sidebarListItem">Style</li>
					<li className="sidebarListItem">Cinema</li>
				</ul>
				<span className="sidebarTitle">CATEGORIES</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fab fa-facebook-square"></i>
					<i className="sidebarIcon fab fa-instagram-square"></i>
					<i className="sidebarIcon fab fa-pinterest-square"></i>
					<i className="sidebarIcon fab fa-twitter-square"></i>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
