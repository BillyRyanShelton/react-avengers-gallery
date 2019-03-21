import React, { Component } from 'react';
import {apiKey} from '../config';
import axios from 'axios';
import SearchForm from './SearchForm';
import AvengerLinks from './AvengerLinks';
import Gallery from './Gallery';


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
            <AvengerLinks onClick={this.performSearch}/>
            <Gallery data={this.state.images} title={this.state.title}/>
          </div>
    );
  }
}

export default AvengerPage;