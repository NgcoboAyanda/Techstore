import ReCAPTCHA from "react-google-recaptcha";
import { useSelector, useDispatch } from "react-redux";
import { getCaptchaSecretKey } from "../../Features/Auth/AuthSlice";

import './CaptchaBox.css';

const CaptchaBox = ({captchaValue,setCaptchaValue})=>{
    const captchaSecretKey = useSelector(state=> state.auth.captchaSecretKey)
    const dispatch = useDispatch()

    const getSiteKey = ()=>{
        return process.env.REACT_APP_CAPTCHA_CLIENT_SITE_KEY
    }

    const onChange = value =>{
        if(captchaValue !== value){
            dispatch(getCaptchaSecretKey(value))
        }
    }

    return(
        <>
            <ReCAPTCHA
                size="normal"
                sitekey={getSiteKey()}
                onChange={onChange}
            />
        </>
    )
}

export default CaptchaBox;