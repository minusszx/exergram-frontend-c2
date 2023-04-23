import "./AcitivityNote.css"

const AcitivityNote = () => {
    return (
        <div className="note">
            <label htmlFor="note"><p>Note:</p></label>
            <textarea id="note" name="note"></textarea>
        </div>
    );
}

export default AcitivityNote;