import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tilt from 'react-tilt';

import Activities from './components/activities';

import './styles/basics.scss';
import './styles/home.scss';

import debris from './img/debris-all.png';
import folders from './img/folders.png';
import foldersHover from './img/folders-hover.png';
import email from './img/email.png';
import emailHover from './img/email-hover.png';

import * as serviceWorker from './serviceWorker';

function Home() {
  return (
  <div id="home">

    <div id="title"></div>

    <h4 className="tagline">Reflection activities to open the story of your life's work <span className="mobile-toggle">and education</span>.</h4>

		<div className="hero">
    <div id="floats">
			<Tilt options={{
        max : 55,
        perspective: 1000,
        easing: "cubic-bezier(.03,0.95,0.92,0.99)"
      }} style={{ height: '100%', width: '100%' }}>
				<img className="debris" src={debris} alt="" />
			</Tilt>
      </div>
		</div>

		<div id="folders" className="imgHover">
			<a href="cookie/index.html">
				<img className="static" src={folders} alt="Cookie Trail Files" />
				<img className="hover" src={foldersHover} alt="Cookie Trail Files" />
				<div className="popup-left hover" style={{width: '100px', left: '-125px'}}>What's <em><strong>Project Cookie Trail</strong></em>?</div>
			</a>
		</div>

		<div id="email-jenny" className="imgHover">
			<a href="#footer">
				<img className="static" src={email} alt="Email Jenny" />
				<img className="hover" src={emailHover} alt="Email Jenny" />
				<div className="popup-right hover">Get email updates!</div>
			</a>
		</div>

    <div id="playbookHome">
      <Activities />
    </div>

  </div>
  );
}

export default Home;
