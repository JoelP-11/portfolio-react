import React, { useState } from 'react';
import Project from "../project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Rhythmix Concert Hub',
            description: 'Made use of the Spotify and TicketMaster APIs',
            link: "https://joepinoch.github.io/project-1/",
            repo: "https://github.com/joepinoch/project-1"
        },
        {
            name: 'FineDine',
            description: 'Helped build the front end and used handlebars to build this food review app',
            link: "https://findine.herokuapp.com/",
            repo: "https://github.com/cbae122/project2-reviewapp"
        },
        {
            name: 'DocTalk',
            description: 'MERN stack hospital management application with email and live chat functionality between patients and doctors',
            link: "https://doc-talk-1217027d6c32.herokuapp.com/",
            repo: "https://github.com/Vlad1slav86/DocTalk"
        },
        {
            name: 'WeatherApp',
            description: 'Weather Application built using the weather API along with HTML, CSS, and JavaScript',
            link: "https://joelp-11.github.io/WeatherApp/",
            repo: "https://github.com/JoelP-11/WeatherApp"
        },
        {
            name: 'WorkDayPlanner',
            description: 'built using HTML, CSS, JavaScript',
            link: "https://joelp-11.github.io/Work-day-Planner/",
            repo: "https://joelp-11.github.io/Work-day-Planner/"
        },
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                    project={project}
                    key={"project" + idx}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
