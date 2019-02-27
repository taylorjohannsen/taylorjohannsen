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
import jobs from './pictures/jobs.png';
import base from './pictures/base.jpg';
import weather from './pictures/weather.jpg';

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
            <a className='noDec' href='#Projects'>
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
          <div  id='Bio' className='aboutMe'>About Me</div>
          <div className='myBioCont'>
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
          <div id="Projects" className='aboutMe'>Projects</div>
          <div className='projCont'>
            <div className='eachProj'>
              <a href='http://chute.taylorjohannsen.com/' className='noDec'>
                <div className='projTitle'>Chute</div>
              </a>
              <div className='workCont'>
                <div className='projPhotoCont'>
                  <a href='http://chute.taylorjohannsen.com/' className='noDec'>
                    <img alt='chute' className='projPhoto' src={chute}></img>
                    </a>
                </div>
                <div className='whatUsed'>
                  <div className='whatUsedText'>HTML/CSS</div>
                  <div className='whatUsedText'>JavaScript</div>
                  <div className='whatUsedText'>Node.js</div>
                  <div className='whatUsedText'>Passport.js</div>
                  <div className='whatUsedText'>MongoDB</div>
                  <div className='whatUsedText'>Apache</div>
                </div>
                <div className='projDesc'>
                  <div className='descText'>My name is Taylor Johannsen, I am a full stack web developer from Simi Valley, CA. My experience spans HTML/CSS, Javascript, React, Node.js, MongoDB, MySQL, and Git. I have worked in the IT field for over a year, with my previous job being manager experience in a retail setting.</div>
                  <div className='botLinks'>
                    <a href='http://chute.taylorjohannsen.com/' className='noDec'>
                      <div className='pad'>Live Website</div>
                    </a>
                    <div className='pad'> - </div>
                    <a href='https://github.com/taylorjohannsen/chute' className='noDec'>
                      <div className='pad'>Github Code</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='eachProj'>
              <a href='http://jobsandjobs.taylorjohannsen.com/' className='noDec'>
                <div className='projTitleRight'>Jobs&Jobs</div>
              </a>
              <div className='workCont'>
                <div className='projDesc'>
                  <div className='descText'>My name is Taylor Johannsen, I am a full stack web developer from Simi Valley, CA. My experience spans HTML/CSS, Javascript, React, Node.js, MongoDB, MySQL, and Git. I have worked in the IT field for over a year, with my previous job being manager experience in a retail setting.</div>
                  <div className='botLinks'>
                    <a href='http://jobsandjobs.taylorjohannsen.com/' className='noDec'>
                      <div className='pad'>Live Website</div>
                    </a>
                    <div className='pad'> - </div>
                    <a href='https://github.com/taylorjohannsen/jobsandjobs' className='noDec'>
                      <div className='pad'>Github Code</div>
                    </a>
                  </div>
                </div>
                <div className='whatUsed'>
                  <div className='whatUsedText'>HTML/CSS</div>
                  <div className='whatUsedText'>JavaScript</div>
                  <div className='whatUsedText'>Node.js</div>
                  <div className='whatUsedText'>Express.js</div>
                  <div className='whatUsedText'>MySQL</div>
                  <div className='whatUsedText'>Apache</div>
                </div>
                <div className='projPhotoCont'>
                  <a href='http://jobsandjobs.taylorjohannsen.com/' className='noDec'>
                    <img alt='chute' className='projPhoto' src={jobs}></img>
                    </a>
                </div>
              </div>
            </div>
            <div className='eachProj'>
              <a href='http://basecamp.c21everest.com/' className='noDec'>
                <div className='projTitle'>IT Basecamp</div>
              </a>
              <div className='workCont'>
                <div className='projPhotoCont'>
                  <a href='http://basecamp.c21everest.com/' className='noDec'>
                    <img alt='chute' className='projPhoto' src={base}></img>
                    </a>
                </div>
                <div className='whatUsed'>
                  <div className='whatUsedText'>HTML/CSS</div>
                  <div className='whatUsedText'>JavaScript</div>
                  <div className='whatUsedText'>React</div>
                  <div className='whatUsedText'>Windows IIS</div>
                </div>
                <div className='projDesc'>
                  <div className='descText'>My name is Taylor Johannsen, I am a full stack web developer from Simi Valley, CA. My experience spans HTML/CSS, Javascript, React, Node.js, MongoDB, MySQL, and Git. I have worked in the IT field for over a year, with my previous job being manager experience in a retail setting.</div>
                  <div className='botLinks'>
                    <a href='http://basecamp.c21everest.com/' className='noDec'>
                      <div className='pad'>Live Website</div>
                    </a>
                    <div className='pad'> - </div>
                    <a href='https://github.com/taylorjohannsen/itbasecamp' className='noDec'>
                      <div className='pad'>Github Code</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='eachProj'>
              <a href='http://weather.taylorjohannsen.com/' className='noDec'>
                <div className='projTitleRight'>Weather</div>
              </a>
              <div className='workCont'>
                <div className='projDesc'>
                  <div className='descText'>My name is Taylor Johannsen, I am a full stack web developer from Simi Valley, CA. My experience spans HTML/CSS, Javascript, React, Node.js, MongoDB, MySQL, and Git. I have worked in the IT field for over a year, with my previous job being manager experience in a retail setting.</div>
                  <div className='botLinks'>
                    <a href='http://weather.taylorjohannsen.com/' className='noDec'>
                      <div className='pad'>Live Website</div>
                    </a>
                    <div className='pad'> - </div>
                    <a href='https://github.com/taylorjohannsen/weather-app' className='noDec'>
                      <div className='pad'>Github Code</div>
                    </a>
                  </div>
                </div>
                <div className='whatUsed'>
                  <div className='whatUsedText'>HTML/CSS</div>
                  <div className='whatUsedText'>JavaScript</div>
                  <div className='whatUsedText'>React</div>
                  <div className='whatUsedText'>Apache</div>
                </div>
                <div className='projPhotoCont'>
                  <a href='http://weather.taylorjohannsen.com/' className='noDec'>
                    <img alt='chute' className='projPhoto' src={weather}></img>
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
