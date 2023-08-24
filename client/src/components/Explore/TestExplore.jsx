import React, { useEffect } from "react";
import { getAllPosts } from "../../actions/posts";
import PostCard from "../DummyPosts/dummyPosts";
import { useSelector, useDispatch } from "react-redux";
//import "./Posts.css";
import { useParams } from "react-router-dom";
import  userReducer  from "../../reducers/user";
const TestExplore = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer.userData);
  let { posts} = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getAllPosts(user._id));
  }, []);
  if(!posts) return 'No Posts';
  if(params.id) posts = posts.filter((post)=> post.userId===params.id)
  return (
    <div className="Posts">
      {posts.map((post, id) => {
            return <PostCard data={post} key={id} />;
          })}
    </div>
  );
};

export default TestExplore;