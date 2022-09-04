import ReCAPTCHA from "react-google-recaptcha";

import './CaptchaBox.css';

const CaptchaBox = ({captchaValue,setCaptchaValue})=>{

    const getSiteKey = ()=>{
        return process.env.REACT_APP_CAPTCHA_CLIENT_SITE_KEY
    }

    const onChange = value=>{
        console.log(value)
        if(captchaValue !== value){
            setCaptchaValue(value)
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