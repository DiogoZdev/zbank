import React from 'react';

function Icon(prop) {
    return (
      <div className="square-icon">
        <div className="icon-icon">$</div>
        <div className="icon-title">{prop.type}</div>
      </div>
    )
  };

  export default Icon;