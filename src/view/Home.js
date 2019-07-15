import React from 'react';
import { Link } from 'react-router-dom';
import spaceneticLogo from '../assets/logo/logo.svg';
import astronautImg from '../assets/astronaut.svg';
import WelcomePage from './WelcomePage';

export default function Home() {
 return (
  <div className='home'>
   <header className='home__header'>
    <img src={spaceneticLogo} alt='spacenetic logo' className='home__logo' />
    <span className='home__logo-name'>SPACENETIC</span>
   </header>
   <main className='home__main'>
    <h1 className='home__main-heading'>
     Did you know that Jupiter have{' '}
     <span className='home__main-heading--highlighted'>79</span> moons.
    </h1>
    <Link className='home__main-link' to='/welcome-page'>
     let's go
    </Link>
    <img src={astronautImg} alt='astronaut' className='home__main-image' />
   </main>
  </div>
 );
}
