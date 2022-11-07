import React from 'react';
import { Link } from 'react-router-dom';

const MyAccountLink = ({url}) => {
    return (
        <div className="header__nav__links__item  header__nav__links__my-account">
            <div className="header__nav__links__my-account__inner">
                <Link className="header__nav__links__item__element" to={url}>
                    <span className="icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0.5C18.3513 0.5 23.5 5.64871 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64871 23.5 0.5 18.3513 0.5 12C0.5 5.64871 5.64871 0.5 12 0.5ZM12 2C6.47714 2 2 6.47714 2 12C2 17.5229 6.47714 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47714 17.5229 2 12 2ZM17.9961 16.6437L18.197 16.8373L17.1363 17.898C14.5546 15.3163 9.73096 15.2576 7.04736 17.7219L6.86366 17.898L5.803 16.8373C8.96465 13.6757 14.7282 13.6111 17.9961 16.6437ZM12 5.58333C14.255 5.58333 16.0833 7.41162 16.0833 9.66667C16.0833 11.9217 14.255 13.75 12 13.75C9.74495 13.75 7.91667 11.9217 7.91667 9.66667C7.91667 7.41162 9.74495 5.58333 12 5.58333ZM12 7.08333C10.5734 7.08333 9.41667 8.24005 9.41667 9.66667C9.41667 11.0933 10.5734 12.25 12 12.25C13.4266 12.25 14.5833 11.0933 14.5833 9.66667C14.5833 8.24005 13.4266 7.08333 12 7.08333Z" fill="#333333"/>
                        </svg>
                    </span>
                    <span className="label">
                        My Account
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default MyAccountLink;