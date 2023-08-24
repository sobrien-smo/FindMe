import React from "react";
import styles from "./styles.css";
import Topics from "./Topics/Topics";
import NewPostForm from "../NewPostForm/NewPostForm";
import Suggested from "./Suggested/Suggested";
import FeedPosts from "./FeedPosts/FeedPosts"
import DPosts from "../Explore/DPosts/DPosts";
// import  DummyPosts  from "../DummyPosts/dummyPosts";
// import Middle from "./Middle/Middle";
import Navigation from "../NavBar/Navigation";
import { Nav } from "reactstrap";
const Feed = () => {
	return (
		<div>
			<Navigation/>
		<div className="mainContainer">

			
				<div className="row2">
					<div className="left">

						{/* left following suggested*/}

						<Suggested />
					</div>
					<div className="middle">



						<div className="feedBox">
							<div><NewPostForm /></div>
							<br />
							{/* <div><DummyPosts/></div> */}
							<div className="postsContainer"><FeedPosts/></div>
							
						</div>
						{/* whats new all users posts */}
					</div>
				
					<div className="right">
						{/* right */}
						<Topics />
						{/* topics, chat, demo or component */}

			
				</div>
			</div>
		</div>
		</div>
	);
};

export default Feed