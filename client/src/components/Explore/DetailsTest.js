import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getPost, getPostsByTopic } from '../../actions/posts';



const Post = () => {
    const { post, posts } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    useEffect(() => {
        if (post) {
            dispatch(getPostsByTopic({ search: 'none', topics: post?.topics.join(',') }));
        }
    }, [post]);

    if (!post) return null;

    const openPost = (_id) => history.push(`/posts/${_id}`);


    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

    return (
        <div>
          profile?
    </div >
  );
};

export default Post;