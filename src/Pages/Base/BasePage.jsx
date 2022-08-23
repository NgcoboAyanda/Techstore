import React from 'react';

import './BasePage.css';

//This is the base page of our app. 
//This is the first page that will be displayed when the user opens the app.
//Only contains a loading animation.
//*If user login fails, user will be redirected to the AuthPage.
//*If user login passes, user will be redirected to the HomePage.

const BasePage = ()=>{
    return(
        <div className="app__basepage">
            this is the base page bozo
        </div>
    )
}

export default BasePage;