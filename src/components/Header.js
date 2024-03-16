import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../images/aulogo.png';

const Header = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setShowContent(width >= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <header>
      <section>
        <div className="logoName">
          <img className="logo" src={logo} />
        </div>
      </section>
      <nav className='headerNav'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Contact</a></li>
        </ul> 
      </nav>
    </header>
  )
}

export default Header
