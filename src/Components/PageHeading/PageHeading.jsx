import React from 'react';

const PageHeading = ( { heading, siteName, pageContent, divider="/" } )=>{

    const capitalize = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="app__page__main__heading">
            <div className="app__page__main__heading__inner">
                <div className="app__page__main__heading__title">
                    <div className="app__page__main__heading__title__inner">
                        <h1 className="heading  heading_extreme">
                            { capitalize(heading) }
                        </h1>
                    </div>
                </div>
                <div className="app__page__main__heading__sub-text">
                    <div className="app__page__main__heading__sub-text__inner">
                        <span className="site-name">
                            { siteName }
                        </span>
                        <span className="slash">
                            {`${divider}`}
                        </span>
                        <span className="site-niche">
                            { capitalize(heading) }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeading;