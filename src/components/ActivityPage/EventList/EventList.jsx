import React from "react";
import EventCard from "./EventCard";
import "./EventList.css";

const allEvents = [
  {
    img: "https://media.istockphoto.com/id/1165111722/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B9%87%E0%B8%A1%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%84%E0%B8%99%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%81%E0%B8%B5%E0%B8%AC%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=fc8JRyylw0QqO4qj_tvr6N9IvA7RVTfnzcrcezeewww=",
    type: "RUNNING",
    title: "Thailand Granprix!",
    location: "Sriracha, Chonburi",
    dateTime: "20 Apr 2023 at 14.00",
  },
  {
    img: "https://media.istockphoto.com/id/1369654070/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B8%B9%E0%B9%88%E0%B8%AB%E0%B8%99%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B9%81%E0%B8%9A%E0%B8%81%E0%B9%80%E0%B8%9B%E0%B9%89%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%82%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=jkrw2xn2S2Ffl7F0w_Fui3VNjDnQktbxmrx8dSGYXys=",
    type: "HIKING",
    title: "Phuket Bike Week!",
    location: "Patong, Phuket",
    dateTime: "20 Apr 2023 at 8.00",
  },
  {
    img: "https://media.istockphoto.com/id/1470960495/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%82%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B1%E0%B8%99%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%A2%E0%B8%B2%E0%B8%99%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%89%E0%B8%B2%E0%B8%81%E0%B8%8A%E0%B8%99%E0%B8%9A%E0%B8%97%E0%B9%83%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B9%89%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=gIE_gvfU1QLxkS42EUWdNnZ1QexQyDkTdRKQwwyc2dU=",
    type: "CYCLING",
    title: "Bangkok Bike Ralley!",
    location: "Bang Khen, Bangkok",
    dateTime: "23 Apr 2023 at 7.00",
  },
];

const EventList = () => {
  return (
    <>
      <div className="activity-event-right-sidebar">
        <h2>EVENT</h2>
        {allEvents.map((item, idx) => {
          return <EventCard value={item} key={idx} />;
        })}
      </div>
    </>
  );
};

export default EventList;
