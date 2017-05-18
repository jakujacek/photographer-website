import React from 'react'
import MainGallery from './MainGallery.jsx'

class Gallery extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.handleScroll = () => {
      console.log('lol');
    }
  }
  render() {
    return <MainGallery/>
  }
}

export default Gallery
