import React from "react";

const ProfileCard = () => {
  return (
    <>
      <img
        className="activity-profile-sidebar-img"
        src="https://media.istockphoto.com/id/1041195194/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B4%E0%B9%89%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%B7%E0%B8%94%E0%B8%AA%E0%B8%B5%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A2%E0%B8%B7%E0%B8%99%E0%B9%81%E0%B8%82%E0%B8%99%E0%B9%84%E0%B8%82%E0%B8%A7%E0%B9%89%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=MZGinJ-hx38VlTrgGFkJsGTVnhYrLIHrWl1E4hxaVWk="
        alt="img profile"
      />
      <div className="activity-profile-yourprofile">
        <h2>Your Name</h2>
        <div className="activity-profile-all_act">
          <strong>
            <p>All Activities</p>
          </strong>
          <strong>
            <h3>219</h3>
          </strong>
        </div>
        <div className="activity-profile-underline"></div>
        <div className="activity-profile-last_activity">
          <p>Last Activity</p>
          <p>12 April 2023</p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
