import React, {useState} from 'react'
import styles from './styles.css'
import Cover from "../../../images/defaultBg.png";
import Profile from "../../../images/defaultPfp.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ProfilePosts } from "../../../Data/ProfilePosts";
import image7 from "../../../images/image7.jpg";
import building from "../../../images/building.jpg";
import tokyo from "../../../images/tokyo.jpg";
import event from "../../../images/event.png";
import image9 from "../../../images/image9.png";
import image10 from "../../../images/image10.jpg";
import image11 from "../../../images/image11.jpg";
import people2 from "../../../images/people2.jpg";
import jr from "../../../images/jr.jpg";
import people3 from "../../../images/peple3.png";
const Bio = () => {
    //  const { user } = useSelector((state) => state.authReducer.authData);
    // const posts = useSelector((state)=>state.postReducer.posts)
    // const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  
    // const photoList = () => {
    //     for (let i = 0; i < photoPhotos.length; i++) {
    //         const chosenPostPhoto = photoPhotos[Math.floor(Math.random() * photoPhotos.length)];
    //         return chosenPostPhoto;
    //       }
    // }
    //createdat
    //random postphoto
    
    const [toggle, setToggle] = useState(true)
    
    return (
        <div>
        

            
            <hr />
            <div className='profilePosts'>
                {ProfilePosts.map((post, id) => {
                        return (
                            <div className="postContainer" key={id}>
                                <div className="grid">
                                    <div key={id} className="grid-item">
                                        <div className="border">div</div>
                                        <div className="row1">
                                            {/* pfp or name onclick loads profile component with same data supplement with statuc subset of 4 */}
                                            <div className="pfpContainer">
                                                <div className='' ><img src={image7} className='pfp' /></div>
                                            </div>

                                            <div className="group">
                                                <div className='postName'>{post.first_name} {post.last_name} </div>
                                                {/* <div className='postDate'><p>{rand}</p></div> */}
                                            </div>
                                        </div>
                                        <div className="row2">
                                            <div>
                                                <div><img src={post.postPhoto} className="postPhoto" /></div>
                                            </div>
                                        </div>
                                        <div className="rowOther">
                                            <div className="captionText">No caption.</div>
                                            <div className="topics">#{post.topics}</div>
                                        </div>
                                        <div className="postBottom">
                                            <div className="row4">
                                            <div className='likeBox'>
                                    {/* <img src={like} className="like" onClick={() => setLikeCount(post.like + 1)}/> */}
                                    <button >like</button>
                                </div>
                                <div className="likeCount">{post.likes} likes</div>
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
    )
}

export default Bio