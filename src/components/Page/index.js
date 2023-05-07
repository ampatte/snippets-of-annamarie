import React from 'react';
import PageContent from '../pageContent/PageContent';
import About from '../pageContent/About';
import Portfolio from '../pageContent/Portfolio';
import Contact from '../pageContent/Contact';
import Resume from '../pageContent/Resume';

function Page({ currentPage }) {
   
    const renderPage = () => {
        switch (currentPage) {
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
            <PageContent>{renderPage()}</PageContent>
        </section>
    )
}

export default Page;