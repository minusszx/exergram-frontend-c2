import React from "react";
import NonImageActivity from "./SubCom/NonImageActivity";
import SummaryHealthCard from "../BottomSection/SummaryHealthCard";
import "./RecentHistory.css";

function RecentHistory() {
    return (
        <div className='recent-history'>
            <div><h1>Hi! Dashboard Component</h1></div>
            <div className="history-container">
                <h1 style={{fontweight: 400}}>RECENT HISTORY</h1>
                <div className='history-card-box'>
                    <NonImageActivity />
                    <NonImageActivity />
                </div>
                <button className='recent-history-btn'>SEE MORE</button>
            </div>
            <SummaryHealthCard />
        </div>
    )
};

export default RecentHistory;