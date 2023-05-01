import React from "react";
import ProfileCard from "./ProfileCard";
import AchievementCard from "./AchievementCard";
import QuoteCard from "./QuoteCard";

import "./ProfileList.css";

const ProfileList = () => {
  return (
    <div className="activity-page-left-sidebar">
      <ProfileCard />
      <AchievementCard />
      <QuoteCard />
    </div>
  );
};

export default ProfileList;
