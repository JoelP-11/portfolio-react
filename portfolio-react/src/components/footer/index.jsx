import React from 'react';

function Footer() {
    const icons = [
        {
            name: "GitHub",
            link: "https://github.com/JoelP-11"
        },
        {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/joel-perez-9365a9277/"
        },
        {
            name: "Email",
            link: "Jp421513@gmail.com"
        }
    ]

    return (
        <footer className="flex-row px-1">
            {icons.map(icon => 
                (
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                ))}
        </footer>
    );
}

export default Footer;