import React from "react";

import './Error.css';

//Error component: Displays errors on the auth page
const Error = ({error})=>{
    return(
        <div className="error">
            <div className="error__inner">
                This is the error nigga!
            </div>
        </div>
    )
}

export default Error;