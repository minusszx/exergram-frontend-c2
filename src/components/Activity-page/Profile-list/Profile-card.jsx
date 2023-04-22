import React from "react";

const ProfileCard = () => {
  return (
    <div className="Profile-card">
      <h2>Your Name</h2>
      <div class="all_act">
        <strong>
          {" "}
          <p>All Activities</p>
        </strong>
        <strong>
          <h3>219</h3>
        </strong>
      </div>
      <div className="underline"></div>
      <div className="last_activity">
        <p>Last Activity</p>
        <p>12 April 2023</p>
      </div>
    </div>
  );
};

export default ProfileCard;
