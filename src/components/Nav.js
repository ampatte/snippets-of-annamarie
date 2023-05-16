import * as React from 'react';



function Nav({pages, setCurrentPage}) {

  console.log(setCurrentPage)


  
  return (
        <div className='nav'
          style={{
          backgroundColor:'rgb(253, 150, 132)',
          position:'absolute',
          }}
        >
        
          <nav>
        
            <div style={{ fontFamily:'Windsong', fontSize:'xx-large', textAlign:'center'}}> Snippets of Anna Marie </div>
            
        

            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a href='#about' onClick={() => setCurrentPage('about')}>
                About Me  
                </a>
              </li>

              <li className="nav-item">
                <a href='#portfolio' onClick={() => setCurrentPage('portfolio')}>
                | Portfolio 
                </a>
              </li>

              <li className="nav-item">
                <a href='#contact' onClick={() => setCurrentPage('contact')}>
                | Contact Me
                </a>
              </li>

              <li className="nav-item">
                <a href='#resume' onClick={() => setCurrentPage('resume')}>
                | Resume
                </a>
              </li> 
            </ul>
            
           </nav>
        </div>
    );
}

export default Nav;