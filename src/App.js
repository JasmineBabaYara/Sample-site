import React from 'react';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App(){
    return(
      <div className='container'>
        <div className='nav-container'>
          <h1>ARARAT</h1>
          <p>ARCHITECHTURE</p>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Blog
              <i className="bi bi-caret-down"></i>
            </li>
            <li>pages
              <i className="bi bi-caret-down" ></i>
            </li>
            <li>contact</li>
          </ul>
          <button className='navbtn'>get in touch</button>
        </div>

        <img src='/images/build.jpg' alt=''/>
        <p className='img-text'> we design your space</p>
        <p className='img-text-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,ulla arcu arcu.</p>
        <button className='img-btn'>see our projects</button>
      </div>
    )
  
}

export default App;