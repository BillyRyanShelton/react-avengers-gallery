import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';


class AvengerLinks extends Component {

  //When a hero link is clicked, the hero name is sent to the perfromSearch function to change state and re-render the gallery
  submitHandler(e, name) {
    this.props.onClick(name);
  }

  //The nav links are rendered to the DOM
  render() {
    return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/ironman" onClick={(e)=>{this.submitHandler(e, 'Iron Man')}}>Iron Man</NavLink></li>
        <li><NavLink to="/hulk" onClick={(e)=>{this.submitHandler(e, 'Incredible Hulk')}}>Incredible Hulk </NavLink></li>
        <li><NavLink to="/captainamerica" onClick={(e)=>{this.submitHandler(e, 'Captain America')}}>Captain America</NavLink></li>
        <li><NavLink to="/thor" onClick={(e)=>{this.submitHandler(e, 'Thor Odinson')}}>Thor Odinson</NavLink></li>
        <li><NavLink to="/antman" onClick={(e)=>{this.submitHandler(e, 'Ant Man')}}>Ant Man</NavLink></li>
        <li><NavLink to="/blackpanther" onClick={(e)=>{this.submitHandler(e, 'Black Panther')}}>Black Panther</NavLink></li>
        <li><NavLink to="/captainmarvel" onClick={(e)=>{this.submitHandler(e, 'Captain Marvel')}}>Captain Marvel</NavLink></li>
        <li><NavLink to="/spiderman" onClick={(e)=>{this.submitHandler(e, 'Peter Parker')}}>Incredible Spiderman</NavLink></li>
        <li><NavLink to="/doctorstrange" onClick={(e)=>{this.submitHandler(e, 'Doctor Strange')}}>Doctor Strange</NavLink></li>
        <li><NavLink to="/blackwidow" onClick={(e)=>{this.submitHandler(e, 'Black Widow')}}>Black Widow</NavLink></li>
        <li><NavLink to="/hawkeye" onClick={(e)=>{this.submitHandler(e, 'Hawkeye')}}>Hawkeye</NavLink></li>
      </ul>    
    </nav>
    );
  }
}

export default AvengerLinks;