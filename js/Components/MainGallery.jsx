import React from 'react'
import {Link} from 'react-router'
class MainGallery extends React.Component {
  constructor() {
    super()
}
componentDidMount() {
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
    }
};
}
  render() {
    let boxAnimation = ""
    return    <div>
    <div className="slider">
                  <div className="imgSlider"></div>
                  <div className="logo"><Link to="/"
                  className='logoLink'>Awwgraphy</Link></div>
              </div>
              <div>
              <div className={`box ${boxAnimation}`}>
                  <img src="./images/car.jpg" className="boxImg" />
              </div>
              <div className={`box ${boxAnimation}`} style={this.props.style}>
                  <img src="./images/mountain.jpg" className="boxImg" />
              </div>
          </div>
      </div>
  }
}

export default MainGallery
