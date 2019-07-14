import React, { Component } from 'react';
import arrow from '../assets/arrow.png';
import { planetsData } from '../data';

export default class Planets extends Component {
 state = {
  currentIndex: 0
 };

 goToNextPlanet = () => {
  if (this.state.currentIndex === planetsData.length - 1) {
   return this.setState({
    currentIndex: 0
   });
  }
  this.setState(prevState => ({
   currentIndex: prevState.currentIndex + 1
  }));
 };

 render() {
  return (
   <div
    className='planet'
    style={{
     backgroundImage: `url(${planetsData[this.state.currentIndex].image})`
    }}
   >
    <div className='planet__container'>
     <button onClick={this.goToNextPlanet} className='planet__btn'>
      <img src={arrow} alt='arrow' className='planet__arrow' />
     </button>
     <h2 className='planet__name'>
      {planetsData[this.state.currentIndex].name}
     </h2>
     <p className='planet__data'>
      Mass (10<sup>24</sup>kg):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].mass}
      </span>
     </p>
     <p className='planet__data'>
      Diameter (km):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].diameter}
      </span>
     </p>
     <p className='planet__data'>
      Density (kg/m<sup>3</sup>):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].density}
      </span>
     </p>
     <p className='planet__data'>
      Gravity (m/s<sup>2</sup>):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].gravity}
      </span>
     </p>
     <p className='planet__data'>
      Escape Velocity (km/s):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].escapeVelocity}
      </span>
     </p>
     <p className='planet__data'>
      Rotation Period (hours):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].rotationPeriod}
      </span>
     </p>
     <p className='planet__data'>
      Length of Day (hours):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].lengthOfDay}
      </span>
     </p>
     <p className='planet__data'>
      Perihelion (10<sup>6</sup>km):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].perihelion}
      </span>
     </p>
     <p className='planet__data'>
      Aphelion (10<sup>6</sup>km):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].aphelion}
      </span>
     </p>
     <p className='planet__data'>
      Mean Temperature (C):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].meanTemperature}
      </span>
     </p>
     <p className='planet__data'>
      Surface Pressure (bars):
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].surfacePressure}
      </span>
     </p>
     <p className='planet__data'>
      Number of Moons:
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].numberOfMoons}
      </span>
     </p>
     <p className='planet__data'>
      Ring System:
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].hasRingSystem ? 'yes' : 'no'}
      </span>
     </p>
     <p className='planet__data'>
      Global Magnetic Field:
      <span className='planet__data--highlighted'>
       {planetsData[this.state.currentIndex].hasGlobalMagneticField
        ? 'yes'
        : 'no'}
      </span>
     </p>
    </div>
   </div>
  );
 }
}
