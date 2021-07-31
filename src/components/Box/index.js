import React from 'react'; 

function Box(prop) {

  
      return (  
      <div className="content-box ">
        <div className="row">
          <h2>{prop.title}</h2>
          <div className="show-more">+</div>
        </div>
        
        <h3>R$ {prop.value}</h3>
      </div>
    )};

export default Box;