import { NavLink } from "react-router-dom";
import "./post.css";

export default function Post({ img }) {
	return (
		<div className="post">
			<img className="postImg" src={img} alt="" />
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">
						<NavLink className="link" to="/posts?cat=Music">
							Music
						</NavLink>
					</span>
					<span className="postCat">
						<NavLink className="link" to="/posts?cat=Music">
							Life
						</NavLink>
					</span>
				</div>
				<span className="postTitle">
					<NavLink to="/post/abc" className="link">
						Lorem ipsum dolor sit amet
					</NavLink>
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
				officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
				fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
				atque, exercitationem quibusdam, reiciendis odio laboriosam?
			</p>
		</div>
	);
}
