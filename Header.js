import React from 'react'
import "./Header.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
               <AccountCircleIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img className="header_logo" alt="missing" src="/images/tinder.png"></img>

            <IconButton>
               <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header

