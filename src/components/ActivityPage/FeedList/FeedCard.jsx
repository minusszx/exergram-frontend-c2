import React from "react";

const FeedCard = (props) => {
  return (
    <>
      <div className="activity-card-main-content">
        <div className="activity-card-main-img">
          <img src={props.value.img} />
        </div>

        <div className="activity-card-exercise-details">
          <div className="activity-card-exercise-icon">
            <i
              className="fa-solid fa-person-running"
              style={{ color: "#ffffff" }}
            ></i>
            <h3>{props.value.type}</h3>
          </div>
          <div className="activity-card-exercise-summary">
            <div className="activity-card-exercise-header">
              <h3>{props.value.title}</h3>
              <p>{props.value.dateTime}</p>
            </div>
            <div className="activity-card-exercise-info">
              <p>Distance : {props.value.distance} </p>
              <p>Duration : {props.value.duration} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedCard;
