import React from 'react'
import {Link} from 'react-router'
class AboutMe extends React.Component {
  constructor() {
    super()
    this.state = {
      animation: true
    }
  }
  componentDidMount() {
    let interVal = setInterval(() => {
      this.setState({
              animation: !this.state.animation
            })
    }, 3000);
  }
  render() {
      let headAnimation = "headAnimation"
      let hairAnimation = "hairAnimation"
    if (!this.state.animation) {
      headAnimation = ""
      hairAnimation = ""
    }
    return <div className="aboutMe">
              <div className="logo"><Link to="/"
              className="logoLink">Awwgraphy</Link></div>

                  <div className="avatarBox">
                      <div className={`hair ${hairAnimation}`}>
                          <div className="hair1"></div>
                          <div className="hair2"></div>
                          <div className="hair3"></div>
                          <div className="hair4"></div>
                      </div>
                      <div className={`head ${headAnimation}`}>
                          <div className="beard1"></div>
                          <div className="beard2"></div>
                          <div className="eye1"></div>
                          <div className="eye2"></div>
                          <div className="mouth">
                              <div className="lipsTopLeft">
                              </div>
                              <div className="lipsTopRight">
                              </div>
                              <div className="lipsBottomLeft">
                              </div>
                              <div className="lipsBottomRight">
                              </div>
                          </div>
                      </div>      
                  </div>
          </div>
  }
}

export default AboutMe
