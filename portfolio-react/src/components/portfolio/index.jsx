import React, { useState } from 'react';
import Project from "../project";

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Rhythmix Concert Hub',
            description: 'APIs',
            link: "https://joepinoch.github.io/project-1/",
            repo: "https://github.com/joepinoch/project-1"
        },
        {
            name: 'FineDine',
            description: 'handlebars',
            link: "insert deployed app here",
            repo: "insert repo link here"
        },
        {
            name: 'DocTalk',
            description: 'MERN stack',
            link: "insert deployed app here",
            repo: "insert repo link here"
        },
        {
            name: 'N/A',
            description: 'N/A',
            link: "MERN Stack",
            repo: "insert repo link here"
        },
        {
            name: 'N/A',
            description: 'MERN Stack',
            link: "insert deployed app here",
            repo: "insert repo link here"
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
