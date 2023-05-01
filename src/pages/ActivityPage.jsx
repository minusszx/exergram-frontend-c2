import React from "react";
import Layout from "../layout/Layout";
import "../styles/ActivityPage.css";
import FeedContent from "../components/ActivityPage/FeedList/FeedContent";
import ProfileList from "../components/ActivityPage/ProfileList/ProfileList";
import EventList from "../components/ActivityPage/EventList/EventList";
function ActivityPage() {
  return (
    <Layout>
      <div className="activity-list-container">
        <ProfileList />
        <FeedContent />
        <EventList />
      </div>
    </Layout>
  );
}

export default ActivityPage;
