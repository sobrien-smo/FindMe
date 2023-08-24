import React, { useState, useEffect, useRef } from "react";

import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modal from './Modal.js';
import "./styles.css";
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';
import defaultProfile from '../../images/defaultPfp.jpg';
import calendar from '../../images/calendarr.png';
import location from '../../images/locate.png';
import photo from '../../images/pic.png';

const NewPostForm = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({ user: '', caption: '', topics: [], selectedFile: '' });
    // const user = JSON.parse(localStorage.getItem('profile'));
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null)); const [modal, setModal] = useState(false)

    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {

        setPostData({ caption: '', topics: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    // const changeContainer = () = {

    // }
    useEffect(() => {
        if (!post?.caption) clear();
        if (post) setPostData(post);
    }, [post]);

    return (
        <div className="box">
            <div className="newPostContainer">
                <div className="pfpBox">
                    <img src={defaultProfile} alt="Profile" className="pfp" />
                </div>
                {/* onclick={changeContainer() */}
                <div>
                    {/* onChange={openModal} */}
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="What's new?" required className='textBox' value={postData.caption} onChange={(e) => setPostData({ ...postData, caption: e.target.value })} />

                        <div className="icons">
                            <img src={photo} className="icon" id="photo" />
                            <img src={location} className="icon" id="calendar" />
                            <img src={calendar} className="icon" />


                        </div>
                        <div className="thing">
                            <input type="text" placeholder="#topic" required className='topicBox' value={postData.topic} onChange={(e) => setPostData({ ...postData, topics: e.target.value })} />
                            <div className="fileBase"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>


                            <div className="btns">
                                <button className="submitBtn" type="submit">
                                    {/* {loading ? "uploading" : "Share"} */}
                                    {/* disabled={loading} */}
                                    post
                                </button>
                                <br />
                                <button className="submitBtn" onClick={clear}>
                                    clear
                                </button>
                            </div>
                        </div>
                    </form>

                </div>


            </div>
        </div>
    );

    // if (!user?.result?.name) {
    //     return (
    //         <p>sign in or create an account</p>
    //         // <div>
    //         //     <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
    //         //     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    //         //         <ModalHeader toggle={this.toggle}>Sorry about that</ModalHeader>
    //         //         <ModalBody>
    //         //             Please sign in or create an account.
    //         //         </ModalBody>
    //         //         <ModalFooter>
    //         //             <Button color="primary" onClick={this.toggle}>Sign In</Button>{' '}
    //         //             <Button color="secondary" onClick={this.toggle}>Create Account</Button>
    //         //         </ModalFooter>
    //         //     </Modal>
    //         // </div>
    //     );
    // }

    // // handle Image Change
    // const onImageChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         let img = event.target.files[0];
    //         setImage(img);
    //     }
    // };

    // const imageRef = useRef();

    // const handleUpload = async (e) => {
    //     e.preventDefault();
    //     const data = new FormData();
    //     const fileName = Date.now() + image.name;
    //     data.append("name", fileName);
    //     data.append("file", image);
    //     newPost.image = fileName;
    //     console.log(newPost);
    //     try {
    //         dispatch(uploadImage(data));
    //     } catch (err) {
    //         console.log(err);
    //     };
    //     const newPost = {
    //         userId: user._id,
    //         caption: caption.current.value,
    //     };
    //     dispatch(uploadPost(newPost));
    //     resetShare();
    // };

};

export default NewPostForm