import React, { useState } from 'react';

import { InputBase } from '@mui/material';

import { OverlayTrigger, Popover } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbarStyles.css'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import Tooltip from '@mui/material/Tooltip';

const barStyle = {
    background: '#f5f5fb',
    width: '80%',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '0.775rem',
    marginRight: '1em',
}

const barStyleMobile = {
    background: '#f5f5fb',
    width: '90%',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '0.775rem',
}

const notificationData = [
    {
        id: 1,
        img: './images/notification-thumb.png',
        title: 'You have a new session to re..',
        date: 'Today, 10:30AM'
    },
    {
        id: 2,
        img: './images/notification-thumb.png',
        title: 'You have a virtual session..',
        date: 'Yesterday, 9:45'
    },
    {
        id: 3,
        img: './images/notification-thumb.png',
        title: 'You have a face to face sta..',
        date: 'Yesterday, 10:00PM'
    },
]

const menuItems = [
    {
        id:1,
        name: 'Home',
        href: '#',
        cName: 'nav-links'
    },
    {
        id:2,
        name: 'App',
        href: '#reports',
        cName: 'nav-links'
    },
    {
        id:3,
        name: 'Reports',
        href: '#reports',
        cName: 'nav-links'
    },
    {
        id:4,
        name: 'Receipt',
        href: '#receipt',
        cName: 'nav-links'
    },
    {
        id:5,
        name: 'Chat',
        href: '#chat',
        cName: 'nav-links'
    },
]

export default function Navbar() {
    const [menuClicked, setMenuClicked] = useState(false);
    const handleMenu = () => {
        setMenuClicked(!menuClicked)
    }
    return (
        <header>
            <div className="navbar__all">
                <div className='navbar__'>
                    <div>
                        <div className='navbar__content'>
                            <div className="menu__" style={{cursor:'pointer'}} onClick={() => handleMenu()}>
                                {menuClicked ? <CloseIcon style={{ color: '#d5d5d5', fontSize: '2.3rem' }} /> : <MenuIcon style={{ color: '#d5d5d5', fontSize: '2.3rem' }} />}
                            </div>
                            <ul className={menuClicked ? 'nav-menu active': 'nav-menu'}>
                                {menuItems.map((item)=>(
                                    <li key={item.id}>
                                        <a href={item.href} className={item.cName}>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            {/* eslint-disable-next-line */}
                            <a href="#">
                            <div className="logo__">
                                <img src={`./images/Group.png`} alt="" />
                            </div>
                            </a>
                            <div className="search__bar">
                                <Tooltip title="Search">
                                    <InputBase
                                        sx={barStyle}
                                        placeholder='Search and find'
                                        label='Search...'
                                        inputProps={{ 'aria-label': 'search' }}
                                        endAdornment={<SearchIcon style={{ color: '#9c99b5', fontSize: '1em' }} />}
                                    />
                                </Tooltip>
                                <Tooltip title="Add new element">
                                    <div className="add">
                                        + ADD
                                    </div>
                                </Tooltip>

                            </div>
                            <div className="profile__">
                                <div className='profile__buttons'>
                                    <OverlayTrigger
                                        trigger="click"
                                        key={1}
                                        placement={'bottom'}
                                        overlay={
                                            <Popover id={`popover-positioned-${'bottom'}`}>
                                                <Popover.Body>
                                                    {notificationData.map((ele) => (
                                                        <div key={ele.id} className='popover__'>
                                                            <div className='thumbs__notifications'>
                                                                <div className='thumb__pic'>
                                                                    <img src={`${ele.img}`} alt="" />
                                                                </div>
                                                                <div>
                                                                    <div className='thumb__title'>
                                                                        {ele.title}
                                                                    </div>
                                                                    <div className='thumb__date'>
                                                                        {ele.date}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <Tooltip title="Notifications">
                                            <div className='profile__notifications' style={{ cursor: 'pointer' }}>
                                                <img style={{ width: '1rem', paddingTop: '5px' }} src={`./images/notification.png`} alt="" />
                                            </div>
                                        </Tooltip>
                                    </OverlayTrigger>
                                    <Tooltip title="Messages">
                                    <div className='profile__chat' style={{ cursor: 'pointer' }}>
                                        <img style={{ width: '1.2rem', paddingTop: '5px' }} src={`./images/chat.png`} alt="" />
                                    </div>
                                    </Tooltip>
                                </div>
                                <Tooltip title="User name">
                                <div className='profile__name'>
                                    <span>Clarence Russell</span>
                                </div>
                                </Tooltip>
                                <div className='profile__user'>
                                    <Tooltip title="User profile">
                                    <div className='user_picture'>
                                        <img src={`./images/Picture.png`} alt="Picture_profile" />
                                    </div>
                                    </Tooltip>
                                    <div className='user__arrow'>
                                        <img src={`./images/arrow1.png`} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='search__app'>
                <InputBase
                    sx={barStyleMobile}
                    placeholder='Search and find'
                    label='Search...'
                    inputProps={{ 'aria-label': 'search' }}
                    endAdornment={<SearchIcon style={{ color: '#9c99b5', fontSize: '1.5em' }} />}
                />
            </div>
        </header>
    )
}