import React from 'react'
import './styles.css'
import { People } from "../../../Data/People.js";
const Activity = () => {
    return (
        <div className="activityContainer">
            <h3>Activity</h3>
        {People.slice(4, 7).map((person, id) => {
            return (
                <div className="person" key={id}>
                    {/* <span>{person.img}</span> */}
                    <span>{person.name}</span>
                    
                    {/* <span>{person.followers}k</span> */}
                </div>
            )
        })}
        </div>
    )
}

export default Activity