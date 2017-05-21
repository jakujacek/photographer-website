import React from 'react'
import {Link} from 'react-router'
class AboutMe extends React.Component {
  constructor() {
    super()
    this.state = {
      animation: true,
      click: true,
      random: 0.7
    }
  }
  componentDidMount() {
    let interVal = setInterval(() => {
      this.setState({
              animation: !this.state.animation
            })
    }, 4000);
    let randomClear = setInterval(()=> {
      this.setState({
        click: !this.state.click,
        random: 1.5
      });
    }, 800)
  }
  render() {
      let headAnimation = "headAnimation"
      let hairAnimation = "hairAnimation"
      let buttonAnimation = "buttonAnimation"
    if (!this.state.animation) {
      headAnimation = ""
      hairAnimation = ""
    }
    if (!this.state.click) {
      buttonAnimation = ""
    }
    return <div className="aboutMe">
              <div className="logo"><Link to="/"
              className="logoLink">Awwgraphy</Link></div>

                  <div className="avatarBox">
                      <div className={`hair ${hairAnimation}`}>
                          <div className="hairSkin"></div>
                          <div className="hairBackground1"></div>
                          <div className="hairBackground2"></div>
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
                          <div className="eyeBrow1"></div>
                          <div className="eyeBrow2"></div>
                          <div className="mouth">
                              <div className="lipsTopLeft">
                              </div>
                              <div className="lipsTopRight">
                              </div>
                              <div className="lipsBottomLeft">
                              </div>
                              <div className="lipsBottomRight">
                              </div>
                              <div className="smile"></div>
                          </div>
                          <div className="shadow"></div>
                          <div className="nose1">
                          </div>
                          <div className="nose2"></div>
                          <div className="earLeft">
                              <div className="earShell"></div>
                          </div>
                          <div className="earRight">
                              <div className="earShell"></div>
                          </div>
                      </div>
                      <div className="keyboard">
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button0 ${buttonAnimation}`}>
                          </div>
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button1 ${buttonAnimation}`}>
                          </div>
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button2 ${buttonAnimation}`}>
                          </div>
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button3 ${buttonAnimation}`}>
                          </div>
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button4 ${buttonAnimation}`}>
                          </div>
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button5 ${buttonAnimation}`}>
                          </div>
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button6 ${buttonAnimation}`}>
                          </div>
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button7 ${buttonAnimation}`}>
                          </div>
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button8 ${buttonAnimation}`}>
                          </div>
                          <div style={{animationDelay: Math.random() * this.state.random + "s"}}
                          className={`keyButton button9 ${buttonAnimation}`}>
                          </div>
                      </div>
                      <div className="avatarBody">
                      </div>
                      <div className="avatarBody2">
                      </div>
                  </div>
          </div>
  }
}

export default AboutMe
