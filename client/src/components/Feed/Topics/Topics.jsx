import React, { useState } from "react";
import "./Topics.css";
// import ShareModal from "../ShareModal/ShareModal";
// import NavIcons from "../NavIcons/NavIcons";
import {TopicData} from '../../../Data/TopicData.js'
const Topics = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="topicContainer">
    <h3>Topics</h3>
 
    {TopicData.map((topic, id)=>{
            return(
                <div className="topic" key={id}>
                    {/* <div className="text">#{topic.name}</div> */}
                    <div>#{topic.name}</div>
                    <div className="num">{topic.followCount}k following</div>
                </div>
            )
       })}

      {/* <button className="shareButton" >
        Share
      </button> */}
      {/* onClick={() => setModalOpened(true)} */}
      {/* <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} /> */}
    </div>
  );
};

export default Topics;