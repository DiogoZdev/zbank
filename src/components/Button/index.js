import React from 'react';

function Button(props) {

    function login() {

    }

    return(
        <>
            <button className="button"
                onClick={props.action}>
                    {props.value}
                </button>
        </>
    )
}


export default Button;