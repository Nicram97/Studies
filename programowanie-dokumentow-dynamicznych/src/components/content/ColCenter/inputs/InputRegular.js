import React, { useState } from 'react';

function InputRegular({ label, defaultValue, onBlur, validator, invalidMessage }) {
    const [isValid, setIsValid] = useState(true);
    const onValid = validator ? validator : null;

    return (
        <div className="mb-3">
            <label htmlFor={label}>{label}</label>
            <input type="text" className="form-control" id={label} defaultValue={defaultValue} onBlur={(event) => { 
                    if (onValid !== null) {
                        let validationResult = onValid(event.target.value); 
                        console.log('VALID', validationResult);
                        if(!validationResult) {
                            setIsValid(false)
                        } else {
                            setIsValid(true)
                        }
                    }
                    onBlur(event) 
                }} />
            {console.log(!isValid)}
            {!isValid &&
                <div>
                    {invalidMessage}
                </div>
            }
        </div>
    );
}

export default InputRegular;