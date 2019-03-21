import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import GalleryTitle from './GalleryTitle';

class Gallery extends Component{
  render() {
    let data = this.props.data;
    let images;
    if(data.length > 0) {
      images = data.map( (image) => 
        <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id}/>
      );
    } else {
      images = <h1 className="not-found"> Not Found </h1>
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


export default Gallery;