import './App.css';
import React from 'react';


const App = () => {
  return (
    <div>
       <div className="main">
       <img className="profile" src={require('./images/profile_photo.jpeg')} alt={"Olivia Hu"}/>
        
        <div className="bio">
          <div className="header">
            <h1>Olivia Hu</h1>
            <h2>Computer Science student at UPenn</h2>
          </div>
          <div className="body">
            <p>
              Hi! I'm <strong>Olivia Hu</strong>, a sophomore at the University of Pennsylvania studying computer science with minors in mathematics and economics. I'm currently developing my skills in software engineering and web/app development, and am eager to apply them to projects that make a difference! In my free time, I enjoy...
            </p>
            <ul>
              <li>Reading</li>
              <li>Going to concerts</li>
              <li>Trying new restaurants</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="socials">
        <a href="https://github.com/olivianhu" target='_blank' rel='noreferrer'>Github</a>
        <a href="https://www.linkedin.com/in/olivianhu/" target='_blank' rel='noreferrer'>LinkedIn</a>
      </div>
    </div>
  );
};

export default App;
