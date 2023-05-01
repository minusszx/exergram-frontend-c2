import React from "react";

const EventCard = (props) => {
  return (
    <>
      <div className="activity-event-card-detail">
        <img src={props.value.img} />
        <div className="activity-event-card-location">
          <h3>{props.value.type}</h3>
          <h4>{props.value.title}</h4>
          <p>{props.value.location}</p>
          <p>{props.value.dateTime}</p>
        </div>
      </div>
    </>
  );
};

export default EventCard;
