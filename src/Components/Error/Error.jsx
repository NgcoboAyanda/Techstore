import React from "react";
import { useSelector } from "react-redux";

import './Error.css';

//Error component: Displays errors on the auth page
const Error = ({message={detail:''}})=>{

    const renderErrorMessage = ()=>{
        if(message.detail){
            //if there is an error
            return(
                <div className="error">
                    <div className="error__inner">
                        {message.detail}
                    </div>
                </div>
            )
        }
        else return null;
    }

    return(
        <>
            {renderErrorMessage()}
        </>
    )
}

export default Error;