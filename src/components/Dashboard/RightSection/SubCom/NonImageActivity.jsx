import React from "react";
import "./NonImageActivity.css";

function NonImageActivity() {
    return (
        <div className="non-image-activity">
                <div className="activity-box">
                    <div className="activity-left">
                        <i className="activity-icon fa-solid fa-person-running" style={{color: '#e8e8e8'}}></i>
                    </div>
                    <h2 style={{fontstyle: 'italic'}}>RUN</h2>
                </div>
                <div className="activity-right">
                    <h3 style={{fontweight: 400}}>Today is a bright day</h3>
                    <p>20 March 2023 at 18.03</p>
                    <div className="card-stat">
                        <div>
                            <span>Distance</span>
                            <span>7.81 km</span>
                        </div>
                        <div>
                            <span>Duration</span>
                            <span>1h 37m</span>
                        </div>
                    </div>
                </div>
        </div>
    )
};

// function NonImageActivity() {
//     return (
    
//     )
// }

export default NonImageActivity;