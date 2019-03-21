import React, { Component } from 'react';

class GalleryItem extends Component{

  //An image tag is rendered to the DOM and when clicked a new window opens with the image URL
  render() {
    let url = this.props.url;
    return (
      <li className="gif-wrap">
        <img src={url} onClick={()=> window.open(url)} />
      </li>
    );
  }
}

export default GalleryItem;