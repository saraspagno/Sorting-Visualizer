import React from 'react';


import linkedin from './linkedin.png'
import './Footer.css';


export default class BubbleSortModal extends React.Component {


  render() {
    return (
      <div className="footer">
      <div className="copyright"> Sara Spagnoletto 2020
      <img className="linkedin" src={linkedin} alt="linkedin" onClick={(e) => {
        e.preventDefault();
        window.location.href='https://www.linkedin.com/in/saraspagnoletto/';
      }}/>
      </div>

      </div>
    )
  }
}
