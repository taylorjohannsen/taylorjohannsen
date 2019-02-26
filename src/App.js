import React, { Component } from 'react';
import tay2 from './pictures/tay2.JPG';
import head from './pictures/headshot.jpg';
import right from './pictures/right.jpg';
import sami from './pictures/tayandsami.JPG';
import github from './pictures/github.svg';
import linkedin from './pictures/linkedin.png';
import email from './pictures/email.png';
import git from './pictures/git.svg';
import html from './pictures/html.png';
import css from './pictures/css.svg';
import js from './pictures/JS.svg';
import mongo from './pictures/mongo.png';
import react from './pictures/react.svg';
import node from './pictures/node.png';
import mysql from './pictures/mysql.png';
import chute from './pictures/chute.png';

class App extends Component {
  render() {
    return (
      <div>
        <a className='titleDec' href='/'>
          <div className='myName'>Taylor Johannsen</div>
          <div className='fullStack'>Full Stack Web Developer</div>
        </a>
        <div className='socialFlex'>
          <a className='titleDec cFlex' href='https://github.com/taylorjohannsen'>
            <img className='socialIcon' alt="github" src={github}></img>
            <div className="socialText">/taylorjohannsen</div>
          </a>
          <a className='titleDec cFlex' href='https://www.linkedin.com/in/taylorjohannsen/'>
            <img className='linkedIn' alt="linkedin" src={linkedin}></img>
            <div className="socialText">/taylorjohannsen</div>
          </a>
          <a className='titleDec cFlex' href='mailto:taylorjohannsen@gmail.com'>
            <img className='linkedIn' alt="email" src={email}></img>
            <div className="socialText">@taylorjohannsen</div>
          </a>
        </div>
        <div className='mainCont'>
          <div className='navBar'>
            <a className='noDec' href='#Bio'>
                <div className='linkText'>About Me</div>
            </a>
            <a className='noDec' href='/'>
            <div className='linkText'>Projects</div>
            </a>
            <a className='noDec' href='/'>
            <div className='linkText'>Contact</div>
            </a>
          </div>
          <div className='imgFlex'>
            <div className='imgCont'>
              <img className='awayPic' alt='Taylor Johannsen' src={sami}></img>
            </div>
            <div className='imgCont'>
              <img className='awayPic' alt='Taylor Johannsen' src={head}></img>
            </div>
            <div className='imgCont'>
              <img className='awayPic' alt='Taylor Johannsen' src={tay2}></img>
            </div>
          </div>
          <div className='largePho'>
            <img className='meRight' alt='Taylor Johannsen' src={right}></img>
          </div>
          <div className='aboutMe'>About Me</div>
          <div id='Bio' className='myBioCont'>
            <div className='iconFlex'>
              <div className='techIcon'>
                <img className='techImg' alt='html' src={html}></img>
              </div>
              <div className='techIcon'>
                <img className='techImg' alt='css' src={css}></img>
              </div>
              <div className='techIcon'>
                <img className='techImg' alt='js' src={js}></img>
              </div>
              <div className='techIcon'>
                <img className='techImg' alt='react' src={react}></img>
              </div>
              <div className='techIcon'>
                <img className='techImg' alt='node' src={node}></img>
              </div>
              <div className='techIcon'>
                <img className='techImg' alt='mongo' src={mongo}></img>
              </div>
              <div className='techIcon'>
                <img className='techImg' alt='mysql' src={mysql}></img>
              </div>
              <div className='techIcon'>
                <img className='techImg' alt='git' src={git}></img>
              </div>
            </div>
            <div className='myBio'>My name is Taylor Johannsen, I am a full stack web developer from Simi Valley, CA.<br></br>My experience spans HTML/CSS, Javascript, React, Node.js, MongoDB, MySQL, and Git. I have worked in the IT field for over a year, with my previous job being manager experience in a retail setting. My biggest strength is that I learn fast, going from no web development experience to full stack web applications hosted on my own apache server in 3-4 months. Creating these applications is a passion for me. I enjoy making a responsive and clean front end, while also supporting with a secure and swift back end.</div>
          </div>
          <div id="Projects " className='aboutMe'>Projects</div>
          <div className='projCont'>
            <div className='eachProj'>
              <div className='projTitle'>Chute</div>
              <div className='workCont'>
                <div className='projPhotoCont'>
                  <img alt='chute' className='projPhoto' src={chute}></img>
                </div>
                <div className='whatUsed'>
                  <div className='whatUsedText'>Test</div>
                  <div className='whatUsedText'>Test</div>
                  <div className='whatUsedText'>Test</div>
                  <div className='whatUsedText'>Test</div>
                </div>
                <div className='projDesc'>
                  <div className='descText'>My name is Taylor Johannsen, I am a full stack web developer from Simi Valley, CA. My experience spans HTML/CSS, Javascript, React, Node.js, MongoDB, MySQL, and Git. I have worked in the IT field for over a year, with my previous job being manager experience in a retail setting. My biggest strength is that I learn fast, going from no web development experience to full stack web applications hosted on my own apache server in 3-4 months. Creating these applications is a passion for me. I enjoy making a responsive and clean front end, while also supporting with a secure and swift back end.</div>
                  <a href='/' className='titleDec'>
                    <div>Live Website</div>
                  </a>
                  <a href='/' className='titleDec'>
                    <div>Github Code</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  }
}

export default App;
