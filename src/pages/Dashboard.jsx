import React from "react";
import Layout2 from "../layout/Layout2";
import SummaryTrack from "../components/Dashboard/LeftSection/SummaryTrack";
import RecentHistory from "../components/Dashboard/RightSection/RecentHistory";
import "../styles/Dashboard.css";


function Dashboard() {
  return (
    <Layout2>
      <div className="dashboard-container">
        <SummaryTrack />
        <RecentHistory />
      </div>
    </Layout2>
  );
}



export default Dashboard;

