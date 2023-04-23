import "./ActivityListButton.css";

const ActivityListButton = () => {
    return (
        <div className="btn-container">
            <button className="orange-btn" type="submit" value="Submit">Create</button>
            <button className="other-btn" type="submit" value="Submit">Cancle</button>
        </div>
    );
}

export default ActivityListButton;