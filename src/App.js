import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import {apiKey} from './config';
import axios from 'axios';


class GalleryItem extends Component{
  render() {
    let url = this.props.url;
    let blah = () => {window.open(url);};
    return (
      <li className="gif-wrap">
        <img src={url} alt="" onClick={()=> window.open(url)} />
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
      images = <h1 className="not-found"> Loading.... </h1>
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
        <li><NavLink to="/ironman" onClick={(e)=>{this.submitHandler(e, 'Iron Man')}}>Iron Man</NavLink></li>
        <li><NavLink to="/hulk" onClick={(e)=>{this.submitHandler(e, 'Incredible Hulk')}}>Incredible Hulk </NavLink></li>
        <li><NavLink to="/captainamerica" onClick={(e)=>{this.submitHandler(e, 'Captain America')}}>Captain America</NavLink></li>
        <li><NavLink to="/thor" onClick={(e)=>{this.submitHandler(e, 'The Mighty Thor')}}>Mighty Thor</NavLink></li>
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


class AvengerPage extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loading: true,
      title:''
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = this.props.searchTopic) => {
    query = query.replace(/' '/g, '%20');
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&sort=relevance&per_page=24&page=1&format=json&nojsoncallback=1`).then((response) => {
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
          <div className="container">
            <SearchForm onSearch={this.performSearch}/>
            <AvengerLinks onClick={this.perfromSearch}/>
            <Gallery data={this.state.images} title={this.state.title}/>
          </div>
    );
  }
}


class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <AvengerPage searchTopic='Marvel'/>}/>
          <Route exact path='/ironman' render={() => <AvengerPage searchTopic='Iron Man'/>}/>
          <Route exact path='/hulk' render={() => <AvengerPage searchTopic='Incredible Hulk'/>}/>
          <Route exact path='/captainamerica' render={() => <AvengerPage searchTopic='Captain America'/>}/>
          <Route exact path='/thor' render={() => <AvengerPage searchTopic='Thor'/>}/>
          <Route exact path='/antman' render={() => <AvengerPage searchTopic='Ant Man'/>}/>
          <Route exact path='/blackpanther' render={() => <AvengerPage searchTopic='Black Panther'/>}/>
          <Route exact path='/captainmarvel' render={() => <AvengerPage searchTopic='Captain Marvel'/>}/>
          <Route exact path='/spiderman' render={() => <AvengerPage searchTopic='Spiderman'/>}/>
          <Route exact path='/doctorstrange' render={() => <AvengerPage searchTopic='Doctor Strange'/>}/>
          <Route exact path='/blackwidow' render={() => <AvengerPage searchTopic='Black Widow'/>}/>
          <Route exact path='/hawkeye' render={() => <AvengerPage searchTopic='Hawkeye'/>}/>
          <Route render={() => <AvengerPage searchTopic='404 Not Found'/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App