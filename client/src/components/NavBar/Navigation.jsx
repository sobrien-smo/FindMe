import React, { useState, useEffect } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './styles.css';
import { useNavigate } from "react-router-dom";
import notification from '../../images/notification.png';
import search from '../../images/searchh.png';
import settings from '../../images/settingz.png';
import profile from '../../images/profile.png';

import explore from '../../images/explore.png';
import chat from '../../images/chat.png';
import * as actionType from '../../constants/actionTypes';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const Navigation = () => {

    const navigate = useNavigate();

    
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // const dispatch = useDispatch();
    // const location = useLocation();
    // const history = useHistory();
    // const classes = useStyles();

    // const logout = () => {
    //     dispatch({ type: actionType.LOGOUT });

    //     history.push('/auth');

    //     setUser(null);
    // };

    // useEffect(() => {
    //     const token = user?.token;

    //     if (token) {
    //         const decodedToken = decode(token);

    //         if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    //     }

    //     setUser(JSON.parse(localStorage.getItem('profile')));
    // }, [location]);

    return (
        <div className='navBar'>
            <div id='findMe' onClick={() => navigate("/feed")}>FindMe</div>
            <div className='iconGroup'>
            <div>
                <img src={explore} className='icon' id='explore' onClick={() => navigate("/explore")}/>
            </div>
            <div>
            <OverlayTrigger trigger="click" placement="bottom" overlay={  <Popover id="popover-basic">
    <Popover.Header as="h3">Messages</Popover.Header>
    <Popover.Body>
      Chat feature coming soon!
    </Popover.Body>
  </Popover>}>
  <img src={chat} className='icon' id ='chat'/>
  </OverlayTrigger>
            </div>
            <div>
                
            <OverlayTrigger trigger="click" placement="bottom" overlay={  <Popover id="popover-basic">
    <Popover.Header as="h3">Notifications</Popover.Header>
    <Popover.Body>
      <div className='notificationRow'>
        <div className='top'>
        <div className='time'><strong>2 hr</strong></div>
        <div><strong>Amanda Whitting</strong></div>
        </div>
        <div>Liked your post</div>
      </div>
      <div className='notificationRow'>
        <div className='top'>
        <div className='time'><strong>1 hr</strong></div>
        <div><strong>Trevor Smith</strong></div>
        </div>
        <div>Shared a post</div>
      </div>
      <div className='notificationRow'>
        <div className='top'>
        <div className='time'><strong>5 min</strong></div>
        <div><strong>Billy Howell</strong></div>
        </div>
        <div>Shared an event</div>
      </div>
    </Popover.Body>
  </Popover>}>
    <img src={notification} className='icon' id='bell'/>
  </OverlayTrigger>
                
            </div>
            <div>
                <img src={profile} id ='profile'className='icon' onClick={() => navigate("/main")}/>
            </div>
            <div>
                <img src={settings} id ='settings'className='icon' />
            </div>
            </div>
           
        </div>
    );
};

export default Navigation;