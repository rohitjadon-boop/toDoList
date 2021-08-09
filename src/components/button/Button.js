import React from "react";

function Button({ onClick, operation }){
    return (
        <button onClick={ onClick } >{ operation }</button>
    )
}

export default Button;