import React from 'react';
import Logo from '../assets/logo.svg';


const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex items-center justify-between'>
        <a href='/'>
          <img src={Logo} alt=''></img>
        </a>
        <a href='/'><button className='btn btn-sm'>Software Developer</button></a>
      </div>
    </div>
  </header>;
};

export default Header;
