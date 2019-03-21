import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import GalleryTitle from './GalleryTitle';

class Gallery extends Component{
  render() {

    //The images data is passed via props to the data variable
    let data = this.props.data;
    let images;

    //If there are images in the data then each image is mapped and a GalleryItem component is stored in the images array
    if(data.length > 0) {
      images = data.map( (image) => 
        <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id}/>
      );
    } //If no images are in the array then a Not Found message is displayed to the DOM 
    else {
      images = <h1 className="not-found"> Not Found </h1>
    }

    //The gallery title and images array are rendered to the DOM
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
