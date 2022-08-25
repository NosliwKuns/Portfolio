import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Navbar.scss';
import { useScroll } from '@react-three/drei';

const NavBar = ({setPageScroll}) => {
  const [ham, setHum] = useState(false);
  const scroll = useScroll();

  const pageView = 1 / 5;
  
  const handleClick = (e) => {
    setHum(!ham)
  };

  console.log(scroll, 'noooooo')

  return (
    <nav className='nav-bar'>
      <div className='nav-container'>
        <h3>logo</h3>
        <div className='menu'>
          <button onClick={() => setPageScroll(pageView * 0)}>Home</button>
          <button onClick={() => setPageScroll(pageView * 1)}>About</button>
          <button onClick={() => setPageScroll(pageView * 2)}>Projects</button>
          <button onClick={() => setPageScroll(pageView * 3)}>Contact</button>
        </div>
        <button 
          className={ham ? `hamburger` : 'hamburger is-active'}
          onClick={handleClick}
          >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
};

export default NavBar;