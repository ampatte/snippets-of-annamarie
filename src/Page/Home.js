import React from 'react';
import Content from '../components/Content';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { capitalizeFirstLetter } from '../utils/helpers'

function Home({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <About />;        
        }
    };

    return (
        <section>
            <h2>{ capitalizeFirstLetter (currentPage.name)}</h2>
            <Content>{renderPage()}</Content>
        </section>
    )
}

export default Home;