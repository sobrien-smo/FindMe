import React, { useState, useEffect, useRef } from "react";

import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button,  ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modal from './modal';
import "./newpost.css";
import Post from '../Post/Post'
import postReducer from "../../reducers/posts";
import { uploadImage, uploadPost } from '../../actions/posts';
////new form also has date created?

const NewPost = () => {
  
  //const { user } = useSelector((state) => state.postReducer.data);
  //const loading = useSelector((state) => state.postReducer.uploading);
  const [postPhoto, setPostPhoto] = useState(null);
  const caption = useRef();
  const tags = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPostPhoto(img);
    }
  };

  const imageRef = useRef();

  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();

    //post data
    const newPost = {
      //userId: user.id,
      caption: caption.current.value,
      
    };

    // const [postData, setPostData] = useState({ caption: '', tags: [], selectedFile: '' });
    // const dispatch = useDispatch();
    // const post = useSelector((state) => (currentId ? state.posts.posts.find((caption) => caption.id === currentId) : null));
    // const [modal, setModal] = useState(false)

  
    const clear = () => {
       // setCurrentId(0);
        // setPostData({ caption: '', tags: [], selectedFile: '' });
    };

    // useEffect(() => {
    //     if (!post?.selectedFile) clear();
    //     if (post) setPostData(post);
    // }, [post]);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // if (currentId === 0) {
        //     dispatch(createPost({ ...postData, name: user?.result?.name }, history));
        //     clear();
        // } else {
        //     dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        //     clear();
        // }
    };

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
    return (
        <div><h1>testsss</h1></div>
        
        // <div className="newPostContainer">
        //     {/*  value={postData.caption} onChange={(e) => setPostData({ ...postData, caption: e.target.value })} */}
        //     <div className="topRow">
        //         <div className="pfpCircle">S</div>
        //         <div className="icons">pic needle event</div>
        //     </div>
        //     <form onSubmit={handleSubmit}>
        //     <input type="text" className="caption" variant="outlined" label="caption" placeholder="What's new?"  />
        //     {/* onClick={() => setModal(true)} */}
        //     <button>open</button>
        //     {/* <Modal modal={modal} setModal={setModal}> */}
        //         {/* <input type="text" placeholder="What's new?"></input> */}
        //         <div className="btnContainer">
        //             <div>tags</div>
        //         <div className="fileInput"></div>
        //             <button className="submitBtn" >Share</button>
        //         </div>
        //     {/* </Modal> */}
         
        //     <div >
        //         {/* tags  */}
        //         {/* name="tags"
        //                 variant="outlined"
        //                 label="Tags"
        //                 fullWidth
        //                 value={postData.tags}
        //                 // onAdd={() => handleAddTag()}
        //                 // onDelete={() => handleDeleteTag()} */}

        //     </div>
        //     {/* { ...postData, selectedFile: base64 } */}
            
        
        //     </form>
        // </div>
    );
    }
};

export default NewPost