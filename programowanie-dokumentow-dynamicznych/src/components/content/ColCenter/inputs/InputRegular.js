import React from 'react';

function InputRegular({label, defaultValue, onBlur}) {
    return (
        <div className="mb-3">
            <label htmlFor={label}>{label}</label>
            <input type="text" className="form-control" id={label} defaultValue={defaultValue} onBlur={onBlur}/>
            {/* <div id="nazwaProdukt_Blad"></div>
            <div className="invalid-feedback">
                Walidacja wymaga wpisania nazwy produktu.
            </div> */}
        </div>
    );
}

export default InputRegular;