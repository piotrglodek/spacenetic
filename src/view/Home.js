import React from 'react';
import { Link } from 'react-router-dom';
import spaceneticLogo from '../assets/logo/logo.svg';
import astronautImg from '../assets/astronaut.svg';
import WelcomePage from './WelcomePage';

export default function Home() {
 return (
  <>
   <header className='header'>
    <img src={spaceneticLogo} alt='spacenetic logo' className='header__logo' />
    <span className='header__heading'>SPACENETIC</span>
   </header>
   <main className='main'>
    <h1 className='main__heading'>
     Did you know that Jupiter have{' '}
     <span className='main__heading--highlighted'>79</span> moons.
    </h1>
    <Link className='main__link' to='/welcome-page'>
     let's go
    </Link>
    <img src={astronautImg} alt='astronaut' className='main__image' />
   </main>
  </>
 );
}
