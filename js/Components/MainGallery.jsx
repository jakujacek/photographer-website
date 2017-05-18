import React from 'react'

class MainGallery extends React.Component {
  constructor() {
    super()
}
  componentDidMount() {
  document.querySelector('.box').firstChild.addEventListener('scroll', function(){
    console.log('lol');
  })

  }
  componentWillUnmount() {
  }
  render() {
    return    <div>
    <div className="slider">
                  <div className="imgSlider"></div>
                  <div className="logo">Awwgraphy</div>
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
