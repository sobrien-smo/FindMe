import React, { useState } from 'react';
import { DummyFollowers } from "../../../Data/DummyFollowers.js"
import { DummyUserData } from '../../../Data/DummyUserData.js';
import { DummyFeedData } from '../../../Data/DummyFeedPosts.js';
import { comments } from '../../../Data/comments.js';
import "./styles.css";
import { useNavigate } from "react-router-dom";
import tokyo from '../../../images/tokyo.jpg';
import def from '../../../images/defaultPfp.jpg';
import image1 from '../../../images/image1.jpg';
import image2 from '../../../images/image2.jpg';
import image3 from '../../../images/image3.jpg';
import image4 from '../../../images/image4.jpg';
import image5 from '../../../images/image5.jpg';
import image6 from '../../../images/image6.jpg';
import image7 from '../../../images/image7.jpg';
import image8 from '../../../images/image8.jpg';

import like from '../../../images/like2.png';
import pfp from '../../../images/defaultPfp.jpg';
///use this for explore page
//subset for feed page
//on clicks for suggested user 

const FeedPosts = () => {

    

    const rand = new Date();
const text = rand.toLocaleDateString();


const [likes, setLikes] = useState(0);


    return (
        <div className="dPostContainer">
            {DummyFeedData.map((post, id) => {
                // console.log(post.likeCount);
           
                return (
                    <div className="postContainer" key={id}>
                        {/* <div className="border">div</div> */}
                        <div className='container'>
                        <div className="row1">
                            {/* pfp or name onclick loads profile component with same data supplement with statuc subset of 4 */}
                            <div className="pfpContainer">
                               <img src= {post.pfp} className="pfp"/>
                               {console.log(post.pfp)}
                            </div>
                            <div>
                            </div>
                            <div className="group">
                                <div className='postName'>{post.first_name} {post.last_name}</div>
                                <div>{text}</div>
                            </div>
                        </div>
                        <div className="row2">
                            <div>
                                <div className="imgContainer" >
                                <div><img src={post.postPhoto} className="postPhoto" id="postPhoto"/></div>
                                    </div>
                            </div>
                        </div>
                        <div className="rowOther">
                            <div className="captionText">New things coming!</div>
                            <div className="topics">#{post.topics}</div>
                        </div>
                        <div className="postBottom">
                            <div className="row4">
                                <div className='likeBox'>
                                    {/* <img src={like} className="like" onClick={() => setLikeCount(post.like + 1)}/> */}
                                    <button  className="likeBtn">like</button>
                                </div>
                                <div className="likeCount" >{post.likes} likes</div>
                            </div>
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
                                        {comments.map((comment, id) => {
                                            return (
                                                <div>
                                                    <div>
                                                        <div className="content" key={id}>
                                                            <div className='commentList'>
                                                                <div className='comment'>{comment.comment1}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <div>View Comments</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
};

export default FeedPosts

