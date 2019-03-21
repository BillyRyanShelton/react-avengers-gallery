import React, { Component } from 'react';

class GalleryItem extends Component{
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