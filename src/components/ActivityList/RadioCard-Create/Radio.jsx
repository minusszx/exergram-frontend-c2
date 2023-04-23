import "./Radio.css";

const Radio = (props) => {
    const {title, icon} = props;

    return (
        <div className="ipt-container">
            <input className="radio-input" 
                type="radio" 
                name="activity" 
                id={title}
                title={title} />
            <div className="radio-tile">
                <i className={icon}></i>
                <label htmlFor={title}>{title.charAt(0).toUpperCase() + title.slice(1)}</label>
            </div>
            
        </div> 
    );
}

export default Radio;