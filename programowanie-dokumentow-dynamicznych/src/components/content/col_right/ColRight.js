import React from 'react';
import mieciu from './mieciu.jpg'

function ColRight() {
    return (
        <div className="col-6 col-md-2" style={{ 'z-index': "-1" }}>
            <img src={mieciu} className="img-fluid" alt="Responsive image" />
            Pozdrawiam serdecznie
        </div>
    );
}

export default ColRight;