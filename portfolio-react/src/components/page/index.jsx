import React from 'react';
import PageContent from '../pageContent';
import About from '../about';
import Portfolio from '../Portfolio';
import Contact from '../contact';
import Resume from '../Resume';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case 'About Me':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <section>
            <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}

export default Page;