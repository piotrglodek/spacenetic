import React from 'react';
import arrow from '../assets/arrow.png';

export default function Planets() {
 return (
  <div className='planet'>
   <header className='planet__header'>
    <h2 className='planet__name'>Mercury</h2>
    <button className='planet__btn'>
     <img src={arrow} alt='arrow' className='arrow' />
    </button>
   </header>
   <section className='planet__body'>
    <p className='planet__info'>
     mass: <span className='planet__info--highlighted'>0.33</span>
    </p>
    <p className='planet__info'>
     diameter: <span className='planet__info--highlighted' />
    </p>
    <p className='planet__info'>
     density: <span className='planet__info--highlighted' />
    </p>
    <p className='planet__info'>
     gravity: <span className='planet__info--highlighted' />
    </p>
    <p className='planet__info'>
     escape velocity: <span className='planet__info--highlighted' />
    </p>
    <p className='planet__info'>
     rotation period: <span className='planet__info--highlighted' />
    </p>
    <p className='planet__info'>
     length of day: <span className='planet__info--highlighted' />
    </p>
    <p className='planet__info'>
     mean temperature: <span className='planet__info--highlighted' />
    </p>
    <p className='planet__info'>
     number of moons: <span className='planet__info--highlighted' />
    </p>
    <p className='planet__info'>
     has ring system: <span className='planet__info--highlighted' />
    </p>
   </section>
  </div>
 );
}
