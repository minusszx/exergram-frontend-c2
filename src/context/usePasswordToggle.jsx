import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const usePasswordToggle = () => {
    const [visible, setVisiblility] = useState(false);

    const Icon = (
        <FontAwesomeIcon 
            icon={visible ? "eye-slash" : "eye"}
            onClick={() => setVisiblility(visiblity => !visiblity)}
        />
    );
    
    const InputType = visible ? "text" : "password";

    return [InputType, Icon];
};

export default usePasswordToggle;