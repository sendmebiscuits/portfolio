import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <br/>
        <img src={require('./images/face.jpg')} alt='face' className='rounded-circle'/>
        <br/><br/>
        <p className='lead'>Hi, welcome to my portfolio!</p>
        <p>If you're looking for a web developer (or someone) who is motivated and always
          seeking self improvement, look no further. As an aspiring fullstack
          Javascript web developer I want to make a contribution back to the internet and
          world!</p>
        <br/>
        <h5>Skills and Experience:</h5>
            Javascript(ES6), Node/Express, React/Redux, HTML/CSS/Bootstrap, MySQL,
            RESTful API, jQuery, Python, Java, Git, AWS EC2, Jest, React Native, D3,
            webpack, Babel, Heroku, Sequelize
            <br/><br/><br/>
      </div>
    );
  }
}

export default Home;