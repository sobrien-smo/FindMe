import React, { useState, useEffect } from "react";
import "./styles.css";
// import ShareModal from "../ShareModal/ShareModal";
import { getAllUsers } from "../../../api/api";
// import NavIcons from "../NavIcons/NavIcons";
import { useSelector } from "react-redux";
import User from "../../User/User";
import { People } from '../../../Data/People.js';
import { useNavigate } from "react-router-dom";
import {DummyFollowers} from '../../../Data/DummyFollowers.js';
import img1 from "../../../images/image1.jpg";
import img2 from "../../../images/image2.jpg";
import img7 from "../../../images/image7.jpg";
import img6 from "../../../images/image6.jpg";
const Suggested = () => {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [id, setId] = useState(0);
 // const { user } = useSelector((state) => state.user.data);
 const navigate = useNavigate();
  
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const { data } = await getAllUsers();
  //     setSuggestedUsers(data);
  //   };
  //   fetchUsers();
  // }, []);console.log(id);
    return (
    <div className="suggestedContainer">
        <h3 className="top">Suggested</h3>
        <div className="suggestedBox">
        <div className="dfollower">
        {/* onClick={buildProfile} */}
          <div onClick={() => navigate("/dummyProfile")}><img src={img1}className="followerPic" /></div>
          
          <div>Andrew Thomas</div>
        </div>
        <div className="dfollower">
          <div onClick={() => navigate("/dummyProfile2")}><img src={img7} className="followerPic"/></div>
          <div>Teresa Summers</div>
        </div>
        <div className="dfollower">
          <div onClick={() => navigate("/dummyProfile3")}><img src={img2}className="followerPic"/></div>
          <div>Keith Brenning</div>
        </div>
        <div className="dfollower" >
          <div onClick={() => navigate("/dummyProfile4")}><img src={img6}className="followerPic"/></div>
          <div>Natasha Smith</div>
        </div>
        </div>

        <div className="seeMoreLink" onClick={() => navigate("/explore")}>See more</div>
       
        {/* onClick={() => setModalOpened(true)} */}
        {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
    </div>
  );
};

export default Suggested