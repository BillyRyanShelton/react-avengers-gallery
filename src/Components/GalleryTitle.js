import React, { Component } from 'react';

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

export default GalleryTitle;