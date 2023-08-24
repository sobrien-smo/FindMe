

function PersonDetail({person}) {
    

    return (

        <div>
        <h1>dummy profile</h1>
        <div>
            <div className="header">
                <div className="pfp">{person.first_name}</div>
                <div className="userInfo">
                    {/* <span>{user.Bio}Tell everyone about yourself</span> */}
                    <span>Tell everyone about yourself</span>
                </div>
            </div>
            <div className="mainContainer">


                <div className="bioContainer">
                    <div className="user">
                       
                    </div>
                    <div className="followStatus">
                        <hr />
                        <div className="followCounts">
                            <div className="follow">
                                {/* <span>{user.followers.length}</span> */}
                                <span className="fText">Followers</span>
                                <span className="num">{person.followers}</span>
                            </div>
                            <div className="vl">
                                <hr className="half" />
                            </div>
                            <div className="followCounts">
                                {/* <span>{user.following.length}</span> */}
                                <span className="fText"> Following</span>
                                <span className="num">{person.following}</span>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="esBox">
                        
                        <div className="e">
                            <span className="fText"> {person.experience}</span>
                            <span className="num">{person.currrentPosition}</span>
                            <span className="num">{person.currrentEmployer}</span>
                        </div>
                    </div>

                </div>
                <div className="third">
                    <div className="chat">Chat Mockup</div>
                </div>

            </div>
        </div>
    </div>
        
    );
}
export default PersonDetail;