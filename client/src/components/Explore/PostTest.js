import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import like from '../../images/like.png'
import { like, deletePost } from '../../../actions/posts';
import styles from './explore.css'

const Post = ({ post, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const userId = user?.result?._id;
    const hasLikedPost = post.likes.find((like) => like === userId);

    const handleLike = async () => {
        dispatch(like(post._id));

        if (hasLikedPost) {
            setLikes(post.likes.filter((id) => id !== userId));
        } else {
            setLikes([...post.likes, userId]);
        }
    };

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId)
                ? (
                    <>{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <>{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <> &nbsp;Like</>;
    };

    const openPost = (e) => {
        // dispatch(getPost(post._id, history));

        history.push(`/posts/${post._id}`);
    };

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
                    <div className='postName'>{post.name}</div>
                    <div className='postDate'><p>{moment(post.createdAt).fromNow()}</p></div>
                </div>
            </div>
            <div className="row2">
                <div>
                    <div ><img src={post.selectedFile }/></div>
                </div>
            </div>
            <div className="rowOther">
                <div className="captionText">{post.message.split(' ').splice(0, 20).join(' ')}...</div>
                <div className="topics">{post.tags.map((tag) => `#${tag} `)}</div>
            </div>
            <div className="postBottom">
                <div className="row4">
                    <div className='likeBox'>
                        {/* <img src={like} className="like" onClick={() => setLikeCount(post.like + 1)}/> */}
                        <button disabled={!user?.result} onClick={handleLike}>like</button>
                    </div>
                    <div className="likeCount"><Likes/></div>
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
                    {( user?.result?._id === post?.user) && (
                    <button size="small" onClick={() => dispatch(deletePost(post._id))}>
                        Delete
                    </button>
        )}
                </div>
            </div>
            <div>


            </div>
        </div>
    );
};

export default Post;