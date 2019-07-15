import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
 return (
  <div className='welcome'>
   <h1 className='welcome__heading'>start your journey</h1>
   <Link to='/planets' className='welcome__circle welcome__circle--pulsing' />
  </div>
 );
}
