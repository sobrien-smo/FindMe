import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import Post from '../Posts/Post/Post';
import { getPostsByUser, getPostsBySearch } from '../../actions/posts';

const UsersOrTopics = () => {
    // const { name } = useParams();
    // const dispatch = useDispatch();
    // const { posts } = useSelector((state) => state.posts);

    // const location = useLocation();

    // useEffect(() => {
    //     if (location.pathname.startsWith('/topics')) {
    //         dispatch(getPostsBySearch({ topic: name }));
    //     } else {
    //         dispatch(getPostsByUser(name));
    //     }
    // }, []);

    // if (!posts.length) return 'No posts';

    // return (
    //     <div>
    //         <h2>{name}</h2>
    //         <div>
    //                 {posts?.map((post) => (
    //                         <Post post={post} />
    //                 ))}
    //             </div>
    //     </div>
    // );
};

export default UsersOrTopics;