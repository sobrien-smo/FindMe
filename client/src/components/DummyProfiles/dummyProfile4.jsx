import React from "react";
import Navigation from "../NavBar/Navigation";
import styles from "./dstyles.css";

import Profile from "../../images/defaultPfp.jpg";

import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import image7 from "../../images/image7.jpg";
import img6 from "../../images/image6.jpg";

import theater1 from "../../images/theater1.jpg";
import { DummyFollowers } from "../../Data/DummyFollowers";
let dfollowers = {DummyFollowers};
//random date function
//random image function 
const DummyProfile4 = ({ person, onSelectedPerson }) => {
    // console.log(DummyFollowers[1].currentEmployer)
    const setTheLikeCount = () => {
        console.log();
        // let newLikeCount = likeCount + 1;
        // return newLikeCount;
    }
    return (
        <div>
            <Navigation />
            <div className="profileContainer">
                <div className="otherRow">
                    <h2>{DummyFollowers[3].name}</h2>
                    <img src={img6} className='topPfp' />
                    <div className="cBox">
                        <div>{DummyFollowers[3].currentPosition} </div>

                        <div></div>
                    </div>
                    <div className="userInfo">
                        {/* <span>{user.Bio}Tell everyone about yourself</span> */}

                        <div>{DummyFollowers[3].bio}</div>
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
                        <div className='fnum'>{DummyFollowers[3].followers}</div>
                    </div>

                    <div>
                        <h4>Following</h4>
                        <div className='fnum'>{DummyFollowers[3].following}</div>
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
                            <li>{DummyFollowers[3].education}</li>
                        </ul>
                    </div>
                </div>
                <div className='exp'>
                    <h4>Experience</h4>
                    <div>
                        <ul>
                            <li>{DummyFollowers[3].experience}</li>
                            <li>Data Management || Hartmann LLC</li>
                        </ul>
                    </div>
                </div>

            </div>
            <hr />
            <div className='profilePosts'>
                {
                    DummyFollowers[3].posts.map((post, id) => {

                        return (
                            <div className="postContainer" key={id}>
                                <div className="grid">
                                
                                 
                                            <div key={id} className="grid-item">
                                                <div className="border">div</div>
                                                <div className="row1">
                                                    {/* pfp or name onclick loads profile component with same data supplement with statuc subset of 4 */}
                                                    <div className="pfpContainer">
                                                        <div className='' ><img src={img6} className='pfp' /></div>
                                                    </div>

                                                    <div className="group">
                                                        <div className='postName'>{DummyFollowers[1].name}</div>
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
                                    <button onClick={() => setTheLikeCount()}>like</button>
                                </div>
                                <div className="likeCount">{post.likes} likes</div>                                                    </div>
                                                    <div className="row5">
                                                    <form>
                                    <div className="addCommentBox">
                                        <button className="addCommentBtn">+</button>
                                        <input type='text' placeholder="Add a comment" className="addCommment" />
                                    </div>
                                </form>
                                <div className="commentNum">{post.commentNum} comments</div>                                                    </div>
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
}

export default DummyProfile4