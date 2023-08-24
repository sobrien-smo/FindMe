import React, { useState, useMemo } from 'react';
import styles from './explore.css'
import Navigation from '../NavBar/Navigation'
//import Pagination from './Pagination.js';
import { DummyUserData } from '../../Data/DummyUserData';
import { useEffect } from 'react';
import DummyPosts from './DPosts/DPosts'
import tokyo from '../../images/tokyo.jpg';
import { comments } from '../../Data/comments.js';
import image3 from '../../images/image3.jpg';
import image8 from '../../images/image8.jpg';

import people2 from "../../images/people2.jpg";
import people3 from "../../images/peple3.png";
import people from "../../images/people.jpg";
import images from "../../images/images.jpg";
import image10 from "../../images/image10.jpg";
import image11 from "../../images/image11.jpg";
import event from "../../images/event.png";
import building from "../../images/building.jpg";
import bg2 from "../../images/bg2.jpg";
import pfp from "../../images/defaultPfp.jpg";
const Explore = () => {
    let PageSize = 10;
    const rand = new Date();
const text = rand.toLocaleDateString();
    const [searchString, setSearchString] = useState();

    const [nameString, setNameString] = useState('');
    const [topicString, setTopicString] = useState('');

    const [currentPage, setCurrentPage] = useState(1);

    // const currentTableData = useMemo(() => {
    //     const firstPageIndex = (currentPage - 1) * PageSize;
    //     const lastPageIndex = firstPageIndex + PageSize;
    //    // return data.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);
    let picArr = [people3, people2, people, images, image10, image11, event, building, bg2];

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
     
    return (
        <div>
            <Navigation />
            <form className='formContainer'>
                <div>
                    <input type="text" placeholder="Enter User's name" className='searchText'/>
                    <input type="text" placeholder="Enter topic" className='searchText'/>
                </div>
                
            </form>
            <div className='grid'>
            {DummyUserData.map((post, id) => {
               
            // console.log(post.likeCount);
            let likeCount = (post.likes);
            //console.log(likeCount);
          
            return (

                <div className="postContainer" key={id}>

                    {/* <div className="border">div</div> */}
                    <div className="row1">
                        {/* pfp or name onclick loads profile component with same data supplement with statuc subset of 4 */}
                        <div className="pfpContainer">
                            <img src={pfp} className="pfp"/>
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
                            <div ><img src={post.postPhoto} className="imgContainer" /></div>
                        </div>
                    </div>
                    <div className="rowOther">
                        <div className="captionText">No caption provided</div>
                        <div className="topics">#{post.topics}</div>
                    </div>
                    <div className="postBottom">
                        <div className="row4">
                            <div className='likeBox'>
                                {/* <img src={like} className="like" onClick={() => setLikeCount(post.like + 1)}/> */}
                                <button >like</button>
                            </div>
                            <div className="likeCount">{getRndInteger(100, 10000)} likes</div>
                        </div>
                        <div className="row5">
                            <form><div className="addCommentBox">
                                <button className="addCommentBtn">+</button>

                                <input type='text' placeholder="Add a comment" className="addCommment" />
                            </div>
                            </form>
                            <div className="commentNum">{getRndInteger(100, 10000)} comments</div>
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
        </div>
        // <>


        //     <Pagination
        //         className="pagination-bar"
        //         currentPage={currentPage}
        //        // totalCount={data.length}
        //         pageSize={PageSize}
        //         onPageChange={page => setCurrentPage(page)}
        //     />
        // </>
    );
}
export default Explore

