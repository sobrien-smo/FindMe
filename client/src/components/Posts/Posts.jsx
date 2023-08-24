 // if (!posts.length) return 'No posts';
 import React, { useEffect } from "react";
 import { getAllPosts } from "../../actions/posts";
 import PostTest from "../Explore/PostTest";
 import { useSelector, useDispatch } from "react-redux";
//  import "./Posts.css";
 import { useParams } from "react-router-dom";
 
 const Posts = ({setCurrentId}) => {
  //  const params = useParams()
  //  const dispatch = useDispatch();
   //const { user } = useSelector((state) => state.authReducer.authData);
   //let { posts, loading } = useSelector((state) => state.postReducer);
  //  useEffect(() => {
  //  //  dispatch(getAllPosts(user._id));
  //  }, []);
//    if(!posts) return 'No Posts';
//    if(params.id) posts = posts.filter((post)=> post.userId===params.id)

const { posts} = useSelector((state) => state.posts);
 

  if (!posts.length) return 'No posts';
   return (
     <div className="Posts">
       {posts?.map((post) => (
          <div key={post._id}>
            <PostTest post={post} setCurrentId={setCurrentId} />
          </div>
        ))}
     </div>
   );
 };
 
 export default Posts;