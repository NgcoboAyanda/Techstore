import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useSelector, useDispatch } from "react-redux";
import { getCaptchaSecretKey } from "../../Features/Auth/AuthSlice";

import './CaptchaBox.css';

const CaptchaBox = ({ value, onChange })=>{

    const getSiteKey = ()=>{
        return process.env.REACT_APP_CAPTCHA_CLIENT_SITE_KEY;
    }

    const clearCaptchaSecretKey = ()=>{
        onChange('')
    }

    return(
        <>
            <ReCAPTCHA
                size="normal"
                sitekey={getSiteKey()}
                onChange={onChange}
                onError={clearCaptchaSecretKey}
            />
        </>
    )
}

export default CaptchaBox;