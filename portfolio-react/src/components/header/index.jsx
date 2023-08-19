import React from 'react';
// import coverImage from  finish this later

function Header(props) {
    return (
        <header classname="flex-row space-between px-1">
            <h1>Joel Perez</h1>
            <img src alt="wooden background"></img>
            {props.children}
        </header>
    );
}

export default Header;