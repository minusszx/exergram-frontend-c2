import React from "react";
import Layout from "../layout/Layout";
import Radio from "../components/ActivityList/RadioCard-Create/Radio";
import InsertPic from "../components/ActivityList/InsertPic-Create/InsertPic";
import AcitivityNote from "../components/ActivityList/Note-Create/AcitivityNote";
import ActivityListForm from "../components/ActivityList/Form-Create/ActivityListForm";
import ActivityListButton from "../components/ActivityList/Button-Create/ActivityListButton";
import "../styles/CreateActivity.css"

const ActivityList = [
    {
        title: "run",
        icon: "fa-solid fa-person-running"
    },
    {
        title: "bike",
        icon: "fa-solid fa-bicycle"
    },
    {
        title: "swim",
        icon: "fa-solid fa-person-swimming"
    },
    {
        title: "hike",
        icon: "fa-sharp fa-solid fa-person-hiking"
    },
    {
        title: "boxing",
        icon: "fa-solid fa-hand-fist"
    }
];

const CreatActivity = () => {
    return  (
        <Layout>
            <div className="radio-form-container">
                {/* radio */}
                <div className="container-radio">
                    <div className="radio-group">
                        {ActivityList.map(item => {
                            return (
                                <Radio key={item.title}
                                title = {item.title} 
                                icon = {item.icon} />
                            );
                        })}
                    </div>
                </div>
                {/* form */}
                <div className="form-container-fluid">
                    <div className="form-container">
                        <div className="form-left">
                            <InsertPic />
                            <AcitivityNote />
                        </div>
                        <div className="form-right">
                            <ActivityListForm />
                        </div>
                    </div>    
                    {/* button */}
                    <div className="btn-container">
                        <ActivityListButton />
                    </div>       
                </div>
            </div>
        </Layout>
    );
}


export default CreatActivity;