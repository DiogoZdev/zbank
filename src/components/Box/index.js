import React, { useEffect, useState } from 'react'; 

function Box(prop) {

  const [isVisible, toggleIsVisible] = useState(false);

  function changeVisibility() {
    (isVisible) ? toggleIsVisible(false) : toggleIsVisible(true);
  }
  
      return (  
      <div className="content-box ">
        <div className="row">
          <h2>{prop.title}</h2>
          <div className="show-more" onClick={changeVisibility}>i</div>
        </div>
        
        
          {(isVisible) 
          ? <div>
              <h3>R$ {prop.value}</h3>
              <button className="button">{(prop.btnInfo) ? prop.btnInfo : "Ver mais"}</button>
            </div>  
          : <h3>[- - - -]</h3>}
      </div>
    )};

export default Box;