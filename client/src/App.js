import React, {useEffect} from "react";
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
// import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import useStyles from "./styles";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <div>
            <h1>App</h1>
        </div>

    )
}

export default App;