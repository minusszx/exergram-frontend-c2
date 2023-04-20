import React from "react";
import ConsistencyCard from "../LeftSection/SubCom/ConsistencyCard";
import ChartBox from "../LeftSection/SubCom/ChartBox";
import SummaryActivityCard from "../LeftSection/SubCom/SummaryActivityCard";
import "./SummaryTrack.css";

function SummaryTrack() {
    return (
        <div className='summary-track'>
            <ConsistencyCard />
            <ChartBox />
            <div className='summary-activity-card'>
                <SummaryActivityCard />
                <SummaryActivityCard />
            </div>
        </div>
    )
};

export default SummaryTrack;