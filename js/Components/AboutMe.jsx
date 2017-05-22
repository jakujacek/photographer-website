import React from 'react'
import {Link} from 'react-router'
class AboutMe extends React.Component {
  constructor() {
    super()
    this.state = {
      animation: true,
      click: true,
      delay: [0.7, 0.5, 0.2, 1, 0.1, 0.8, 0.4, 1.2, 0.6, 0.3]
    }
  }
  componentDidMount() {
    this.interVal = setInterval(() => {
      this.setState({
              animation: !this.state.animation
            })
    }, 4000);
    this.randomClear = setInterval(()=> {
      this.setState({
        click: !this.state.click,
      });
    }, 1300)

  }
  componentWillUnmount() {
    clearInterval(this.interVal)
    clearInterval(this.randomClear)
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
                      {
                        this.state.delay.map((e, i)=> {
                          return <div
                          className={`keyButton button${i} ${buttonAnimation}`}
                          style={{animationDelay: e + "s"}}>
                            <div className="finger"></div>
                          </div>
                        })
                      }
                      <div className="keyboard">
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
