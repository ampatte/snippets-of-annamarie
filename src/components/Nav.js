import React from 'react'

function Nav({pages, currentPage, setCurrentPage}) {
    console.log(pages)
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item" onClick={() => setCurrentPage(pages[0].name)}>
                About Me
            </li>
            <li className="nav-item" onClick={() => setCurrentPage(pages[1].name)}>
            Portfolio

            </li>
            <li className="nav-item" onClick={() => setCurrentPage(pages[2].name)}>
            Contact
            </li>
            <li className="nav-item" onClick={() => setCurrentPage(pages[3].name)}>
              Resume
            </li>
        </ul>
    
    );
}

export default Nav;