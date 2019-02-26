import React, { Component } from 'react';
import tay2 from './pictures/tay2.JPG';
import head from './pictures/headshot.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <div className='myName'>Taylor Johannsen</div>
        <div className='mainCont'>
          <div className='navBar'>
            <div>About</div>
            <div>Projects</div>
            <div>Contact</div>
          </div>
          <div className='imgFlex'>
            <img className='awayPic' alt='Taylor Johannsen' src={tay2}></img>
          </div>
          <img className='awayPic' alt='Taylor Johannsen' src={head}></img>
        </div>
      </div>
      );
  }
}

export default App;
