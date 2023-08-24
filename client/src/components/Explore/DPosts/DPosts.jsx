import React, { useState } from 'react';
import { DummyPostData } from '../../../Data/DummyPostData.js';
import { DummyUserData } from '../../../Data/DummyUserData.js';
import { comments } from '../../../Data/comments.js';
import "./styles.css";
import { useNavigate } from "react-router-dom";
import tokyo from '../../../images/tokyo.jpg';
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
const DummyPosts = () => {
   // const navigate = useNavigate();
   
    //const likeCount = DummyPostData.likes;
    //const [likes, setLikeCount] = useState(likeCount);



    let img = { pfp }
    //need gender for pfp
    //post photo, arrays, check topic then loop grab random 

    let malePfps = [image1, image2, image4];
    let femalePfps = [image5, image6, image7, image8];
    const getRandomEntryFromArray = (items) => {
        return items[Math.floor(Math.random() * items.length)];
    }

    const rand = Date.now() + Math.random();
    
    const setTheLikeCount = () => {
        console.log();
        // let newLikeCount = likeCount + 1;
        // return newLikeCount;

    }
    return (<div className="dPostContainer">



        {DummyPostData.map((post, id) => {
            // console.log(post.likeCount);
            let likeCount = (post.likes);
            //console.log(likeCount);
            if (post.gender == "Female") {
                const img = getRandomEntryFromArray(femalePfps);
            } else {
                const img = getRandomEntryFromArray(malePfps);
            }
            return (

                <div className="postContainer" key={id}>

                    <div className="border">div</div>
                    <div className="row1">
                        {/* pfp or name onclick loads profile component with same data supplement with statuc subset of 4 */}
                        <div className="pfpContainer">


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
                            <div ><img src={tokyo} className="imgContainer" /></div>
                        </div>
                    </div>
                    <div className="rowOther">
                        <div className="captionText">Just landed a job at Google!</div>
                        <div className="topics">#{post.topics}</div>
                    </div>
                    <div className="postBottom">
                        <div className="row4">
                            <div className='likeBox'>
                                {/* <img src={like} className="like" onClick={() => setLikeCount(post.like + 1)}/> */}
                                <button onClick={() => setTheLikeCount()}>like</button>
                            </div>
                            <div className="likeCount">{post.likes} likes</div>
                        </div>
                        <div className="row5">
                            <form><div className="addCommentBox">
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
                                                {/* <button type="button" className="collapsible">View more Comments</button> */}
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
                    <div>


                    </div>
                </div>
            )

        })}

    </div>
    )
};
// <h1>test</h1>
//     <div >
//         {DummyPostData.map((post, id) => {
//             return (
//                 <div key={id}>
//                     <DPost
//                         id={id}
//                         firstName={post.first_Name}
//                         lastName={post.last_Name}
//                         likes={post.likes}
//                         commentNum={post.commentNum}
//                         topics={post.topics}
//                         pfp={post.pfp}
//                         postPhoto={post.postPhoto}
//                         comments={post.comments}
//                     />
//                 </div>
//             );
//         })}
//     </div>



// };
// const DPost = ({ firstName, lastName, likes, commentNum, comments, topics, }) => {
//     <div className="post">
//         <div className="row1">
//             <div className="pfp">pfp</div>
//             <div className="group">
//                 <div className="name">{firstName} {lastName}</div> 
//                 <div className="date">date</div>
//             </div >
//         </div>
//         <div className="row2">
//             <div className="postPhotoContainer">
//                 img
//             </div>
//         </div>
//         <div className="row3">
//             <div className="captionText">Caption</div>
//             <div className="topics">{topics}</div>
//         </div>

//     </div>
// }

export default DummyPosts

