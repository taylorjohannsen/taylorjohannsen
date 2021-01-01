import React, { Component } from 'react';
import tay2 from './pictures/tay2.JPG';
import head from './pictures/headshot.jpg';
import github from './pictures/github.svg';
import kev from './pictures/kev.jpg'
import alfa from './pictures/alfa-chicago.jpg';
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
import bulldog from './pictures/bulldog.jpg';
import ohky from './pictures/ohky.jpg';
import smite from './pictures/smite.png';

class App extends Component {
    render() {
        return (
            <div>
                <div className='Banner'>
                    <a className='titleDec' href='/'>
                        <div className='myName'>Taylor Johannsen</div>
                        <div className='fullStack'>Full Stack Software Developer</div>
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
                        <a className='noDec' href='#Contact'>
                            <div className='linkText'>Contact</div>
                        </a>
                    </div>
                    <div className='imgFlex'>
                        <div className='imgCont'>
                            <img className='awayPic' alt='Taylor Johannsen' src={head}></img>
                        </div>
                        <div className='imgCont'>
                            <img className='awayPic' alt='Taylor Johannsen' src={tay2}></img>
                        </div>
                        <div className='imgCont'>
                            <img className='awayPic' alt='Taylor Johannsen' src={kev}></img>
                        </div>
                    </div>
                    <div id='Bio' className='aboutMe'>About Me</div>
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
                        <div className='myBio'>My name is Taylor Johannsen, I am a full stack web developer from Simi Valley, CA.<br></br>My 2 years of experience spans HTML/CSS, Javascript, React, Node.js, MongoDB, MySQL, Git, and Google Cloud Platform. I am a driven software developer living in southern California. After discovering web based development, I couldn't get enough. I built websites in freelance, for my portfolio, and as an employee for MXS Solutions. As a as a Full Stack Software Developer, I've planned, designed, and written web platforms and programs that all employees at the company use. As a result of my efforts, the company executes its services 5 times faster from when I started in April 2019. I've chosen Full Stack Software Development because I am very passionate in learning new technologies. I enjoy having part in working on both the frontend and backend sides of development, as well as bringing in my IT experience of hosting these programs on web servers that I have setup. My current stack includes Node.js (express) on the backend and React on the frontend, with web hosting using Apache on linux servers, and MongoDB as my database. I look forward to branching my tech stack further into both native and mobile development.</div>
                    </div>
                    <div id="Projects" className='aboutMe'>Projects</div>
                    <div className='projCont'>
                        <div className='eachProj'>
                            <a href='https://www.chicagoalfaromeodealers.com/' className='noDec'>
                                <div className='projTitleRight'>Alfa Romeo Chicagoland</div>
                            </a>
                            <div className='workCont'>
                                <div className='projDesc'>
                                    <div className='descText'>Alfa Romeo Chicagoland is a Tier 2 website made for a group of Alfa Romeo dealers in the Chicago area. I was given project lead with the responsibility of managing a handful of devs and their tasks, while also taking on a majority of the work for this project. I had my hand in almost every section in this project. From writing the API on the backend, building out the front-end from designs, setting up databases, and hosting on Google Cloud Engine. The project was a success with the team finishing the project a week early under my leadership.</div>
                                    <div className='botLinks add'>
                                        <a href='https://www.chicagoalfaromeodealers.com/' className='noDec'>
                                            <div className='pad'>Live Website</div>
                                        </a>
                                    </div>
                                </div>
                                <div className='whatUsed'>
                                    <div className='whatUsedText'>HTML/CSS</div>
                                    <div className='whatUsedText'>JavaScript</div>
                                    <div className='whatUsedText'>Node.js</div>
                                    <div className='whatUsedText'>Express.js</div>
                                    <div className='whatUsedText'>EJS</div>
                                    <div className='whatUsedText'>MongoDB</div>
                                    <div className='whatUsedText'>GCE</div>
                                </div>
                                <div className='projPhotoCont'>
                                    <a href='https://www.chicagoalfaromeodealers.com/' className='noDec'>
                                        <img alt='chute' className='projPhoto' src={alfa}></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='eachProj'>
                            <a href='https://www.ohkyalfaromeodealers.com/' className='noDec'>
                                <div className='projTitleRight'>Alfa Romeo Ohio Kentucky</div>
                            </a>
                            <div className='workCont'>
                                <div className='projDesc'>
                                    <div className='descText'>Alfa Romeo Ohio Kentucky is a Tier 2 website made for a group of Alfa Romeo dealers in the Ohio-Kentucky area. This site was a carbon copy of the Chicagoland website. I was tasked alone to basically copy the site, including databases and hosting. The client wanted a couple changes which I took care of and had the project ready before the deadline launch.</div>
                                    <div className='botLinks add'>
                                        <a href='https://www.ohkyalfaromeodealers.com/' className='noDec'>
                                            <div className='pad'>Live Website</div>
                                        </a>
                                    </div>
                                </div>
                                <div className='whatUsed'>
                                    <div className='whatUsedText'>HTML/CSS</div>
                                    <div className='whatUsedText'>JavaScript</div>
                                    <div className='whatUsedText'>Node.js</div>
                                    <div className='whatUsedText'>Express.js</div>
                                    <div className='whatUsedText'>EJS</div>
                                    <div className='whatUsedText'>MongoDB</div>
                                    <div className='whatUsedText'>GCE</div>
                                </div>
                                <div className='projPhotoCont'>
                                    <a href='https://www.ohkyalfaromeodealers.com/' className='noDec'>
                                        <img alt='chute' className='projPhoto' src={ohky}></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='eachProj'>
                            <a href='https://www.bulldogliquidatorsofcamarillo.com/' className='noDec'>
                                <div className='projTitleRight'>Bulldog Liquidators</div>
                            </a>
                            <div className='workCont'>
                                <div className='projDesc'>
                                    <div className='descText'>Bulldog Liqiudators is a website that was created for it's Camarillo, CA branch. The head of the branch tasked me to create a website where they could post inventory to customers. With this information I created a Node.js application using express, that allowed the admin to access the backend I created using Passport and MongoDB. Using the backend of the site, they can add / delete inventory, add / delete photos, and update listings accordingly. The front end consisted of EJS, a templating engine. The website would not be hosted on my own server, but on Heroku.</div>
                                    <div className='botLinks add'>
                                        <a href='https://www.bulldogliquidatorsofcamarillo.com/' className='noDec'>
                                            <div className='pad'>Live Website</div>
                                        </a>
                                        <div className='pad'> - </div>
                                        <a href='https://github.com/taylorjohannsen/bulldog' className='noDec'>
                                            <div className='pad'>Github Code</div>
                                        </a>
                                    </div>
                                </div>
                                <div className='whatUsed'>
                                    <div className='whatUsedText'>HTML/CSS</div>
                                    <div className='whatUsedText'>JavaScript</div>
                                    <div className='whatUsedText'>Node.js</div>
                                    <div className='whatUsedText'>Express.js</div>
                                    <div className='whatUsedText'>Passport.js</div>
                                    <div className='whatUsedText'>EJS</div>
                                    <div className='whatUsedText'>MongoDB</div>
                                </div>
                                <div className='projPhotoCont'>
                                    <a href='https://www.bulldogliquidatorsofcamarillo.com/' className='noDec'>
                                        <img alt='chute' className='projPhoto' src={bulldog}></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='eachProj' id='lastProj'>
                            <a href='https://smite.taylorjohannsen.com/' className='noDec'>
                                <div className='projTitleRight'>Smite Stats + Discord Bot</div>
                            </a>
                            <div className='workCont'>
                                <div className='projDesc'>
                                    <div className='descText'>Smite Stats is a React-Node application hooked up to the API of a game called "Smite", a popular MOBA that my friends enjoyed playing together. The Node backend takes all the calls from the React front-end and serves the player, match, and item data for the user to see. The backend also hooks up a MongoDB, which runs and updates the best and most frequent data to save to the DB. This site is also connected to a <a href="https://github.com/taylorjohannsen/smite-stats-discord-bot" className="discBot">Discord Bot</a>, so friends can make calls on discord to the backend to retrieve data and display it in Discord. The project is hosted on my own Linux Webserver.</div>
                                    <div className='botLinks add'>
                                        <a href='https://smite.taylorjohannsen.com/' className='noDec'>
                                            <div className='pad'>Live Website</div>
                                        </a>
                                        <div className='pad'> - </div>
                                        <a href='https://github.com/taylorjohannsen/smite-stats' className='noDec'>
                                            <div className='pad'>Github Code</div>
                                        </a>
                                    </div>
                                </div>
                                <div className='whatUsed'>
                                    <div className='whatUsedText'>HTML/CSS</div>
                                    <div className='whatUsedText'>JavaScript</div>
                                    <div className='whatUsedText'>Node.js</div>
                                    <div className='whatUsedText'>Express.js</div>
                                    <div className='whatUsedText'>React</div>
                                    <div className='whatUsedText'>MongoDB</div>
                                    <div className='whatUsedText'>Apache</div>
                                </div>
                                <div className='projPhotoCont'>
                                    <a href='https://smite.taylorjohannsen.com/' className='noDec'>
                                        <img alt='chute' className='projPhoto' src={smite}></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div id="Contact" className='aboutMe'>Contact</div>
                        <div className='contactCont'>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
