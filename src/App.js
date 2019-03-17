import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';


class GalleryItem extends React.Component{
  render() {
    let url  = this.props.url;
    return (
      <div> 
        { url }
      </div>
    );
  }
}

class GalleryTitle extends React.Component{
  render() {
    let title = this.props.title;
    return (
      <h1>
        {title}
      </h1>
    );
  }
}

class Gallery extends React.Component{
  render() {
    let data = this.props.data;
    let images;
    if(data.length > 0) {
      images = data.map( () => <GalleryItem/>
      );
    } else {
      images = <h1> No Results Found! </h1>
    }
    return (
      <div>
        <GalleryTitle/>
        <ul> 
          {images} 
        </ul>
      </div>
    );
  }
}


class AvengerLinks extends React.Component {
  render() {
    return (
    <ul className="main-nav">
      <li><NavLink to="/ironman">Iron Man</NavLink></li>
      <li><NavLink to="/hulk">Hulk</NavLink></li>
      <li><NavLink to="/captainamerica">Captain America</NavLink></li>
      <li><NavLink to="/thor">Thor</NavLink></li>
      <li><NavLink to="/antman">Ant Man</NavLink></li>
      <li><NavLink to="/blackpanther">Black Panther</NavLink></li>
      <li><NavLink to="/captainmarvel">Captain Marvel</NavLink></li>
      <li><NavLink to="/spiderman">Spiderman</NavLink></li>
      <li><NavLink to="/doctorstrange">Doctor Strange</NavLink></li>
      <li><NavLink to="/blackwidow">Black Widow</NavLink></li>
      <li><NavLink to="/hawkeye">Hawkeye</NavLink></li>
      <li><NavLink to="/nickfury">Nick Fury</NavLink></li>
    </ul>    
    );
  }
}

class SearchForm extends React.Component {
  render() {
    return (
      <form class="search-form">
        <input type="search" name="search" placeholder="Search" required/>
        <button type="submit" class="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>     
    );
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      title: ''
    };
  } 
  render() {
    return (
      <div>
        <BrowserRouter>
          <SearchForm/>
          <AvengerLinks/>
          <Gallery data={this.state.images} title={this.state.title}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App