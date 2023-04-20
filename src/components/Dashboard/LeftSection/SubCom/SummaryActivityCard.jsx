import React from "react";
import "./SummaryActivityCard.css";

function SummaryActivityCard() {
    return (
        <div className="summary-data-box">
            <p>Total distance</p>
            <p style={{fontweight: 700}}>Goal : 3 km</p>
            <div>
                1 km
            </div>
        </div>
    )
};

export default SummaryActivityCard;