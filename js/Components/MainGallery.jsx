import React from 'react'
import {Link} from 'react-router'
class MainGallery extends React.Component {
  constructor() {
    super()
}
  render() {
    return    <div>
    <div className="slider">
                  <div className="imgSlider"></div>
                  <div className="logo"><Link to="/"
                  className='logoLink'>Awwgraphy</Link></div>
              </div>
              <div>
              <div className="box" style={this.props.style}>
                  <img src="./images/jacek-jpg-3.jpg" className="boxImg" />
              </div>
              <div className="box" style={this.props.style}>
                  <img src="./images/jacek-jpg-3.jpg" className="boxImg" />
              </div>
              <div className="box" style={this.props.style}>
                  <img src="./images/jacek-jpg-3.jpg" className="boxImg" />
              </div>
              <div className="box" style={this.props.style}>
                  <img src="./images/jacek-jpg-3.jpg" className="boxImg" />
              </div>
              <div className="box" style={this.props.style}>
                  <img src="./images/jacek-jpg-3.jpg" className="boxImg" />
              </div>
          </div>
      </div>
  }
}

export default MainGallery
