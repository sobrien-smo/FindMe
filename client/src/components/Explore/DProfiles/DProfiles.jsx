import React from "react"
import "./styles.css";
import Navigation from "../../NavBar/Navigation"
import { DummyUserData } from '../../../Data/DummyUserData.js';
import DummyPosts from "../DPosts/DPosts"; 
import image7 from "../../../images/image7.jpg";
import { ProfilePosts } from "../../../Data/ProfilePosts";
import {People} from "../../../Data/People"
const DummyProfiles = () => {
    const RandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    
    return (
        <div>
            <Navigation />
            <div className="profileContainer">
            <div className="otherRow">
				<h1>Jane Doe</h1>
				<img src={image7} className='topPfp' />
				<div className="cBox">
					<div>Data Analyst </div>

					<div>{}</div>
				</div>
				<div className="userInfo">
					{/* <span>{user.Bio}Tell everyone about yourself</span> */}

					<span>Workin' hard or hardly workin'?</span>
				</div>
			</div>
                <div>
            <div className="bioContainer">
                <div className="user">
                    {/* <span>{user.firstname} {user.lastname}</span>
                    <span>{user.currentPosition} | {user.currentPosition}</span> */}
                </div>

                <div className="followStatus">

                    <div className="followCounts">
                        <div className="follow">
                            {/* <span>{user.followers.length}</span> */}
                            <h4>Followers</h4><span className='num'>{RandomNumber(100, 100000)}</span>
                        </div>

                        <div className="following">
                            {/* <span>{user.following.length}</span> */}
                            <h4>Following</h4><span className='num'>{RandomNumber(100, 100000)}</span>
                        </div>
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
                            <li>MBA || NYU</li>
                        </ul>
                    </div>
                </div>
                <div className='exp'>
                    <h4>Experience</h4>
                    <div>
                        <ul>
                            <li>Marketing Assistant || Gottlieb and Stiedemann</li>
                            <li>Data Management || Hartmann LLC</li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr />
            <div className='profilePosts'>
                {ProfilePosts.map((post, id) => {
                    return (
                        <div className="postContainer" key={id}>
                            <div className="border">div</div>
                            <div className="row1">
                                {/* pfp or name onclick loads profile component with same data supplement with statuc subset of 4 */}
                                <div className="">
                                
                                </div>
                                <div>
                                </div>
                                <div className="group">
                                    <div className='postName'>{post.first_name} {post.last_name}</div>
                                    {/* <div className='postDate'><p>{rand}</p></div> */}
                                </div>
                            </div>
                            <div className="row2">
                                <div>
                                    <div>{post.postPhoto}</div>
                                </div>
                            </div>
                            <div className="rowOther">
                                <div className="captionText">Caption text</div>
                                <div className="topics">#{post.topics}</div>
                            </div>
                            <div className="postBottom">
                                <div className="row4">
                                    <div className="likeCount">{post.likes} likes</div>
                                </div>
                                <div className="row5">
                                    
                                    <div className="commentNum">{post.commentNum} comments</div>
                                </div>
                                <div className="row6">
                                    <div className="commentBox">

                                        <div className="comments">
                                            {post.comments}</div>
                                    </div>

                                </div>
                            </div>
                            <div>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>
            </div>
        </div>
    );

}

export default DummyProfiles