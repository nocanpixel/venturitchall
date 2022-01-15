import React from 'react';
import './sidebarStyles.css';
import MenuIcon from '@mui/icons-material/Menu';
export default function Sidebar() {
    const sideMenu = [
        {
            id: 1,
            img: 'sq.png'
        },
        {
            id: 2,
            img: 'sqx.png'
        },
        {
            id: 3,
            img: 'sqy.png'
        },
        {
            id: 4,
            img: 'sqz.png'
        }
    ]
    return (
        <div className='sidebar'>
            <div className='column__menu'>
                <div style={{marginTop:'1em',marginBottom:'1em',cursor:'pointer'}}>
                    <MenuIcon style={{color:'white'}} />
                </div>
                <div className='menu__items' style={{background:'#005dff'}}>
                    <img src={`./images/homeActive.png`} alt="home" />
                </div>
                {sideMenu.map((ele)=> (
                    <div key={ele.id} className='menu__items'>
                        <img src={`./images/${ele.img}`} alt={`${ele.img}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}