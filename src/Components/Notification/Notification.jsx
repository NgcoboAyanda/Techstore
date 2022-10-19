import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import './Notification.css';

//Error component: Displays errors on the auth page
const Notification = ({notification})=>{

    useEffect(
        ()=>{
            console.log(notification)
        },
        [notification]
    )

    const renderNotification = ()=>{
        if('error' in notification){
            //if there is an error notification
            return(
                <div className="notification notification_error">
                    <div className="notification_error__inner">
                        {notification.error.detail}
                    </div>
                </div>
            )
        }
        else if('success' in notification){
            //if there's a success notification
            return(
                <div className="notification notification_success">
                    <div className="notification_success__inner">
                        {notification.success.detail}
                    </div>
                </div>
            )
        }
        else{
            //if there's neither
            return null;
        }
    }

    return(
        <>
            {renderNotification()}
        </>
    )
}

export default Notification;