import React from "react";
import FeedCard from "./FeedCard";
import "./Feedcontent.css";

const allActivities = [
  {
    img: "https://media.istockphoto.com/id/1442636177/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B5%E0%B8%AC%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9D%E0%B8%99%E0%B8%95%E0%B8%81.jpg?s=612x612&w=0&k=20&c=9ehj9bJ3LS_vXxtuZW-gxaiWFiLtCrZXgIRDOlZO0rg=",
    type: "RUN",
    title: "Today is a bright day",
    dateTime: "2 Mar 2023 at 18.30",
    distance: 7810,
    duration: 97,
  },

  {
    img: "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlraW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    type: "BIKING",
    title: "Today is a bright day",
    dateTime: "2 Mar 2023 at 18.30",
    distance: 6800,
    duration: 109,
  },
  {
    img: "https://media.istockphoto.com/id/1332857654/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%94%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2%E0%B9%83%E0%B8%99%E0%B8%AA%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B9%8D%E0%B8%B2-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9D%E0%B8%B6%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%A3%E0%B8%A1%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B5%E0%B8%AC%E0%B8%B2%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B9%8D%E0%B8%B2%E0%B8%AB%E0%B8%99%E0%B8%94%E0%B8%AA%E0%B9%8D.jpg?s=612x612&w=0&k=20&c=86RBi6p-pelEZUleeWFrv9ehzpk_S1s0xfjAIIuKaZo=",
    type: "CYCLING",
    title: "Today is a bright day",
    dateTime: "2 Mar 2023 at 18.30",
    distance: 15000,
    duration: 90,
  },
];

const FeedContent = () => {
  return (
    <div className="activity-list-main-body">
      {allActivities.map((item, index) => {
        return <FeedCard value={item} key={index} />;
      })}
    </div>
  );
};

export default FeedContent;
