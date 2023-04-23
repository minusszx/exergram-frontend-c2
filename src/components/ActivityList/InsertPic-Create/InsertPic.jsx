import "./InsertPic.css";

const InsertPic = () => {
    return (
        <div className="insert-pic">
            <label htmlFor="add-pic"><p>Add Your image</p></label>
            <input 
                type="file" 
                id="add-pic" 
                name="filename" 
                accept=".jpg, .jpeg, .png" />
        </div>
    );
}

export default InsertPic;