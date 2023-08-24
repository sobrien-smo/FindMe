import styles from "./styles.css";


import Card from 'react-bootstrap/Card';
import Portfolio from "./portfolio/Portfolio";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { ProfilePosts } from "../../Data/ProfilePosts";
import Bio from './Bio/Bio';
import Activity from './FollowersActivities/Activity'
import defaultBg from "../../images/defaultBg.png";
import Offcanvas from 'react-bootstrap/Offcanvas';
import pfp from "../../images/defaultPfp.jpg";
import building from "../../images/building.jpg";
import Navigation from "../NavBar/Navigation";
import Bg from "../../images/defaultBg.png";
import image7 from "../../images/image7.jpg";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
<div>
<Navigation />
		<div className="profileContainer">
		<div className="otherRow">
			<h2>Jane Doe</h2>
			<img src={image7} className='topPfp' />
			<div className="cBox">
				<div>Data Analyst || Google</div>

				<div></div>
			</div>
			<div className="userInfo">
				{/* <span>{user.Bio}Tell everyone about yourself</span> */}

				<div>Workin' hard or hardly workin'?</div>
			</div>
		</div>
		<div>
			<div className="bioContainer">
				<div className="user">
					{/* <span>{user.firstname} {user.lastname}</span>
			<span>{user.currentPosition} | {user.currentPosition}</span> */}
				</div>



				{/* <span>{user.following.length}</span> */}

			</div>

		</div>
		<div className="followCounts">

			{/* <span>{user.followers.length}</span> */}
			<div>
				<h4>Followers</h4>
				<div className='fnum'>94561</div>
			</div>

			<div>
				<h4>Following</h4>
				<div className='fnum'>2345</div>
			</div>


		</div>
	</div>

	<hr />

	<div className="esBox">
		<div className='ed'>
			<h4>Education</h4>
			<div>
				<ul>
					<li>MS Information Technology || MIT</li>
				
				</ul>
			</div>
		</div>
		<div className='exp'>
			<h4>Experience</h4>
			<div>
				<ul>
					<li>Sysem Admin|| Apple</li>
				</ul>
			</div>
		</div>

	</div>
	<hr />
	<div className='profilePosts'>
		{
			ProfilePosts.map((post, id) => {

				return (
					<div className="postContainer" key={id}>
						<div className="grid">
						
						
									<div key={id} className="grid-item">
										<div className="row1">
											{/* pfp or name onclick loads profile component with same data supplement with statuc subset of 4 */}
											<div className="pfpContainer">
												<div className='' ><img src={image7} className='pfp' /></div>
											</div>

											<div className="group">
												<div className='postName'>{post.name}</div>
												{/* <div className='postDate'><p>{rand}</p></div> */}
											</div>
										</div>
										<div className="row2">
											<div>
												<div><img src={post.postPhoto}className="postPhoto"/></div>
											</div>
										</div>
										<div className="rowOther">
											<div className="captionText">{post.caption}</div>
											<div className="topics">#{post.topics}</div>
										</div>
										<div className="postBottom">
											<div className="row4">
											<div className='likeBox'>
							{/* <img src={like} className="like" onClick={() => setLikeCount(post.like + 1)}/> */}
							<button >like</button>
						</div>
						<div className="likeCount">{post.likes} likes</div>                                                    </div>
											<div className="row5">
											<form>
							<div className="addCommentBox">
								<button className="addCommentBtn">+</button>
								<input type='text' placeholder="Add a comment" className="addCommment" />
							</div>
						</form>
						<div className="commentNum">{post.commentNum} comments</div>
											</div>
											<div className="row6">
												<div className="commentBox">
													<div className="comments">
														{post.comments}
													</div>
												</div>
											</div>
										</div>
										<div>
										</div>
									</div>
							  
						  

						</div>
					</div>

				);
			})}
	</div>

	</div>
);
};

export default Main