import React from 'react';
import coverImage from '../../assets/cover/ilya-pavlov-OqtafYT5kTw-unsplash.jpg'

function Header(props) {
    return (
        <header className="flex-row space-between px-1">
            <h1>Joel Perez</h1>
            <img src={coverImage} alt="wooden background"></img>
            {props.children}
        </header>
    );
}

export default Header;