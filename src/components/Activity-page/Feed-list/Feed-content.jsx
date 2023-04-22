import React from "react";

const FeedContent = () => {
  return (
    <div className="main-content">
      <div className="main-img">
        <img src="https://media.istockphoto.com/id/1442636177/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B5%E0%B8%AC%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9D%E0%B8%99%E0%B8%95%E0%B8%81.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=9ehj9bJ3LS_vXxtuZW-gxaiWFiLtCrZXgIRDOlZO0rg=" />
      </div>
      <div className="exercise-details">
        <div className="exercise-icon">
          <i className="fa-solid fa-person-running" style="color: #ffffff"></i>
          <h3>RUN</h3>
        </div>
        <div className="exercise-summary">
          <div className="exercise-header">
            <h3>Today is a bright day</h3>
            <p>2 Mar 2023 at 18.30</p>
          </div>
          <div className="exercise-info">
            <p>Distance : 7.81km </p>
            <p>Duration : 1h37m </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedContent;
