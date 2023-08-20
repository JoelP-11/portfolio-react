import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import rhythmixConcertHubImage from '../../assets/projects/RhythmixConcertHub.jpg';
import fineDineImage from '../../assets/projects/FineDine.jpg';
import docTalkImage from '../../assets/projects/DocTalk.jpg';

function Project({ project }) {
    const { name, repo, link, description } = project;
    let imageSource;

    switch (name) {
        case 'Rhythmix Concert Hub':
            imageSource = rhythmixConcertHubImage;
            break;
        case 'FineDine':
            imageSource = fineDineImage;
            break;
        case 'DocTalk':
            imageSource = docTalkImage;
            break;
        default:
            imageSource = rhythmixConcertHubImage;
    }

    return (
        <div className="project" key={name}>
            <img
            src={imageSource}
            alt={removeHyphensAndCapitalize(name)}
            className="project-bg"
            />
            <div className="project-text">
                <h3>
                    <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                    <a href={repo}>
                        <i className="fab fa-github"></i>
                    </a>
                </h3>
                <p>{description}</p>
        </div>
        </div>
    );
}

export default Project;