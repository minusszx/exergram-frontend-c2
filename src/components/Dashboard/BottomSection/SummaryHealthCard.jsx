import React from "react";
import "./SummaryHealthCard.css";

function SummaryHealthCard() {
    return (
        <div className='summary-health-card'>
            <SummaryCard /> 
            <SummaryCard /> 
            <SummaryCard /> 
        </div>
    )
};

function SummaryCard() {
    return (
        <div className="summary-card">
            <div className="summary-icon">
                <i className="summary-icon fa-solid fa-fire-flame-curved" style={{color: '#e8e8e8'}}></i>
            </div>
            <p>Calories Burn</p>
            <p>1341 kcal</p>
        </div>
    )
}

export default SummaryHealthCard;