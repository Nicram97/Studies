import React, { useState } from 'react';

function InputRegular({ label, defaultValue, value, onChange, onBlur, validator, invalidMessage, disabled, setGlobalValid }) {
    const [isValid, setIsValid] = useState(false);
    const onValid = validator ? validator : null;

    return (
        <div className="mb-3">
            <label htmlFor={label}>{label}</label>
            <input disabled={disabled} type="text" className={isValid ? 'form-control is-valid': 'form-control is-invalid'} id={label} value={value} defaultValue={defaultValue} onChange={onChange} onBlur={(event) => { 
                    if (onValid !== null) {
                        let validationResult = onValid(event.target.value, setGlobalValid); 
                        if(!validationResult) {
                            setIsValid(false)
                        } else {
                            setIsValid(true)
                        }
                    }
                    onBlur(event) 
                }} />
            {!isValid &&
                <div>
                    {invalidMessage}
                </div>
            }
        </div>
    );
}

export default InputRegular;