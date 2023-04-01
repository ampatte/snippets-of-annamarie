import React from 'react'

function Nav({pages, currentPage, setCurrentPage}) {
    console.log(pages)
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
            <a href='#about' onClick={() => setCurrentPage('About')}>
                About Me
            </a></li>
            <li className="nav-item">
            <a href='#portfolio' onClick={() => setCurrentPage(pages[1].name)}>
            Portfolio

            </a></li>
            <li className="nav-item">
            <a href='#contact' onClick={() => setCurrentPage(pages[2].name)}>
            Contact
            </a></li>
            <li className="nav-item">
            <a href='#resume' onClick={() => setCurrentPage(pages[3].name)}>
              Resume
              </a></li>
        </ul>
    
    );
}

export default Nav;