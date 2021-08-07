import React from 'react';

function Button(props) {

    function toggleLogin() {
        document.querySelector("#login-panel").classList.toggle("hidden");
    }

    return(
        <>
            <button className="button"
                onClick={toggleLogin}>
                    {props.value}
                </button>
        </>
    )
}


export default Button;