import React from 'react';
import styled from 'styled-components';



function Icon(prop) {
    return (
      <div className="square-icon">
        <div className="icon-icon">$</div>
        <div className="icon-title">{prop.type}</div>
      </div>
    )
  };

  export default Icon;