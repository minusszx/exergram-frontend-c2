import "./ActivityListForm.css";

const ActivityListForm = () => {
    return (
        <div className="form-right">
            <label htmlFor="title">Title:</label>
            <input 
                type="text" 
                id="title" 
                name="title" />

            <label htmlFor="date">Date:</label>
            <input 
                type="date" 
                id="date" 
                name="date" />

            <label htmlFor="duration">Duration:</label>
            <div className="duration">
                <input className="duration"
                    type="number" 
                    id="hours" 
                    name="hours" 
                    placeholder="hrs" 
                    min="0"/>
                <input className="duration"
                    type="number"
                    id="minutes"
                    name="minutes"
                    placeholder="min"
                    min="0" />
            </div>

            <label htmlFor="distance">Distance:</label>
            <div className="distance">
                <input className="distance"
                    type="number" 
                    id="kilometers" 
                    name="kilometers" 
                    placeholder="km" 
                    min="0"/>
                <input className="distance"
                    type="number"
                    id="meters"
                    name="meters"
                    placeholder="m" 
                    min="0"/>
            </div>
        </div>
    );
}

export default ActivityListForm;