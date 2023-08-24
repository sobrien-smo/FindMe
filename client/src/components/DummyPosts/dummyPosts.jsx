import React, { useState } from "react";
import "./styles.css";
// import { DummyPosts } from '../../Data/DummyPosts';
import image8 from '../../images/image8.jpg';
import tokyo from '../../images/tokyo.jpg';
import building from '../../images/building.jpg';
import image3 from '../../images/image3.jpg';
import { like } from "../../api/api";
import { useSelector } from "react-redux";
import defaultPfp from '../../images/defaultPfp.jpg';
//import like from "../../images/like.png";
const PostCard = ({ data }) => {
    const { user } = useSelector((state) => state.userReducer.userData);
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length);

    const handleLike = () => {
        like(data._id, user._id);
        setLiked((prev) => !prev);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    };
    return (
        <div className="Post">
            <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : {defaultPfp}}
                alt="default profile image"/>

<div className="row1">
                        {/* pfp or name onclick loads profile component with same data supplement with statuc subset of 4 */}
                        <div className="pfpContainer">


                        </div>
                        <div>


                        </div>
                        <div className="group">
                            <div className='postName'>{data.first_name} {data.last_name}</div>
                            {/* <div className='postDate'><p>{rand}</p></div> */}
                        </div>
                    </div>
                    <div className="row2">
                        <div>
                            <div ><img src={tokyo} className="imgContainer" /></div>
                        </div>
                    </div>
                    <div className="rowOther">
                        <div className="captionText">Just landed a job at Google!</div>
                        <div className="topics">#{data.topics}</div>
                    </div>
                    <div className="postBottom">
                        <div className="row4">
                            <div className='likeBox'>
                                {/* <img src={like} className="like" onClick={() => setLikeCount(post.like + 1)}/> */}
                                <button >like</button>
                            </div>
                            <div className="likeCount">{data.likes} likes</div>
                        </div>
                        <div className="row5">
                            <form><div className="addCommentBox">
                                <button className="addCommentBtn">+</button>

                                <input type='text' placeholder="Add a comment" className="addCommment" />
                            </div>
                            </form>
                            <div className="commentNum">{data.commentNum} comments</div>
                        </div>
                        <div className="row6">
                            <div className="commentBox">

                                <div className="comments">
                                    
                                     <div>View Comments</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>


                    </div>
                </div>
      
    );
}
// const PostCard = (person, onSelectedPerson) => {
//     return (
//         <div onClick={() => onSelectedPerson(person)} className="dummyPostsContainer">

//             <div key = {person.id}>

//             <div className="postContainer">
//                 <div className="row1">
//                     <div className="pfpContainer">{person.pfp}</div>
//                     <div className="group">
//                         <div className="name">{person.first_name} {person.last_name}</div>
//                         <div className="date">{createdAt}</div>
//                     </div>
//                 </div>
//                 <div className="row2">
//                     <div>
//                         <div className="imgContainer">{person.posts.postPhoto}</div>
//                     </div>
//                 </div>
//                 <div className="rowOther">
//                     {/* <div className="captionText">{person.posts.caption}</div> */}
//                     <div className="topics">{person.posts.topic}</div>
//                 </div>
//                 <div className="row4">
//                     <div className="comments">{person.posts.comments}</div>
//                 </div>
//             </div>
//             </div>


// </div>
//     )
// }


export default PostCard