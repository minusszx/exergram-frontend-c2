import React from "react";
import "./ConsistencyCard.css";

function ConsistencyCard() {
    return (
        <div className='consistency-card'>
            {/* <p>*maybe separate day components for each*</p> */}
            <div>
                <p>MON</p>
            </div>
            <div>
                <p>TUE</p>
            </div>
            <div>
                <p>WED</p>
            </div>
            <div>
                <p>THU</p>
            </div>
            <div>
                <p>FRI</p>
            </div>
            <div>
                <p>SAT</p>
            </div>
            <div>
                <p>SUN</p>
            </div>
        </div>
    )
};

export default ConsistencyCard;