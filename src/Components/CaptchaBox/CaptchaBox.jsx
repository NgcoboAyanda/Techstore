import ReCAPTCHA from "react-google-recaptcha";
import { useSelector, useDispatch } from "react-redux";
import { getCaptchaSecretKey } from "../../Features/Auth/AuthSlice";

import './CaptchaBox.css';

const CaptchaBox = ({})=>{
    const captchaSecretKey = useSelector(state=> state.auth.captchaSecretKey)
    const dispatch = useDispatch()

    let recaptchaInstance;

    const getSiteKey = ()=>{
        return process.env.REACT_APP_CAPTCHA_CLIENT_SITE_KEY
    }

    const onChange = value =>{
        dispatch(getCaptchaSecretKey(value))
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