import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import {apiKey} from './config';
import axios from 'axios';


class GalleryItem extends Component{
  render() {
    let url = this.props.url;
    return (
      <li className="gif-wrap">
        <img src={url} alt=""/>
      </li>
    );
  }
}

class GalleryTitle extends Component{
  render() {
    let title = this.props.title;
    return (
      <h1 className='title'>
        {title}
      </h1>
    );
  }
}

class Gallery extends Component{
  render() {
    let data = this.props.data;
    let title = this.props.title;
    let images;
    if(data.length > 0) {
      images = data.map( (image) => 
        <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} />
      );
    } else {
      images = <h1 className="not-found"> No Results Found! </h1>
    }
    return (
      <div className="photo-container">
        <GalleryTitle title={this.props.title}/>
        <ul> 
          {images} 
        </ul>
      </div>
    );
  }
}


class AvengerLinks extends Component {
  render() {
    return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/ironman">Iron Man</NavLink></li>
        <li><NavLink to="/hulk">Incredible Hulk </NavLink></li>
        <li><NavLink to="/captainamerica">Captain America</NavLink></li>
        <li><NavLink to="/thor">Mighty Thor</NavLink></li>
        <li><NavLink to="/antman">Ant Man</NavLink></li>
        <li><NavLink to="/blackpanther">Black Panther</NavLink></li>
        <li><NavLink to="/captainmarvel">Captain Marvel</NavLink></li>
        <li><NavLink to="/spiderman">Incredible Spiderman</NavLink></li>
        <li><NavLink to="/doctorstrange">Doctor Strange</NavLink></li>
        <li><NavLink to="/blackwidow">Black Widow</NavLink></li>
        <li><NavLink to="/hawkeye">Hawkeye</NavLink></li>
        <li><NavLink to="/nickfury">Nick Fury</NavLink></li>
      </ul>    
    </nav>
    );
  }
}

class SearchForm extends Component {

  state = {
    title:''
  }

  newSearch = (event) => {
    this.setState({ title: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onSearch(this.query.value);
    event.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.submitHandler}>
        <input type="search" onChange={this.newSearch} name="search" ref={(input) => this.query=input} placeholder="Search Your Hero" required/>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>     
    );
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      title:'Marvel'
    };
  } 

  performSearch = (query = 'Marvel') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`).then((response) => {
      this.setState({
        images: response.data.photos.photo,
        loading: false,
        title: query
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data.', error);
    }); 
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.performSearch}/>
          <AvengerLinks/>
          <Gallery data={this.state.images} title={this.state.title}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App