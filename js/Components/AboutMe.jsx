import React from 'react'
import {Link} from 'react-router'
class AboutMe extends React.Component {
  constructor() {
    super()
    this.state = {
      animation: true,
      click: true,
      delay: [0.35, 0.25, 0.1, 0.5, 0.05, 0.4, 0.2, 0.6, 0.3, 0.15],
      text1: "Hi, I am Jacek Jakubiak and",
      text2: "I invite You to my website.",
      textAnim: true
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
    }, 700)
    this.helloTime = setTimeout (()=> {
      this.setState({
        text1: "This website uses React.JS",
        text2: "library and pre-processor Sass.",
        textAnim: !this.state.textAnim
      })
    }, 6000)

    this.juniorTime = setTimeout (()=> {
      this.setState({
        text1: "Look at me I am tireless.",
        text2: "Taddaa!",
        textAnim: !this.state.textAnim
      })
    }, 12000)
  }
  componentWillUnmount() {
    clearInterval(this.interVal)
    clearInterval(this.randomClear)
    clearTimeout(this.helloTime)
    clearTimeout(this.juniorTime)
  }
  render() {
      let headAnimation = "headAnimation"
      let hairAnimation = "hairAnimation"
      let buttonAnimation = "buttonAnimation"
      let writeMessage = "writeMessage"
      let write2 = "write2"
    if (!this.state.animation) {
      headAnimation = ""
      hairAnimation = ""
    }
    if (!this.state.click) {
      buttonAnimation = ""
    }
    if(!this.state.textAnim) {
      writeMessage = "writeMessage2"
      write2 = "write3"
    }
    return <div className="aboutMe">
              <div className="logo"><Link to="/"
              className="logoLink">Awwgraphy</Link></div>
                  <div className="avatarBox">
                      <p className="message writeMessage"
                      style={{animation: `${writeMessage} 3s steps(60,end)`}}>
                        {this.state.text1}
                      </p>
                      <p className="message write2"
                        style={{animation: `${write2} 6s steps(60,end)`}}  >
                          {this.state.text2}
                      </p>
                      <div className="pot">
                        <div className="cactus">
                            <div className="cactusArmLeft">
                              <div className="cactusArmShadow"></div>
                            </div>
                            <div className="cactusArmRight">
                              <div className="cactusArmShadow"></div>
                            </div>
                            <div className="cactusShadow"></div>
                        </div>
                        <div className="potShadow"></div>
                      </div>
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
                          {/*<div className="beard1"></div>
                          <div className="beard2"></div>*/}
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
                          </div>
                          <div className="shadow"></div>
                          <div className="nose1">
                          </div>
                          <div className="earLeft">
                              <div className="earShell"></div>
                          </div>
                          <div className="earRight">
                              <div className="earShell"></div>
                          </div>
                      </div>
                      {
                        this.state.delay.map((e, i)=> {
                          return <div key={i}
                          className={`keyButton button${i} ${buttonAnimation}`}
                          style={{animationDelay: e + "s"}}>
                            <div className="finger"></div>
                          </div>
                        })
                      }
                      <div className="neck"></div>
                      <div className="keyboard">
                      </div>
                      <div className="avatarBodyRight">
                              <div className="collar"></div>
                            <div className="rightArm">
                                  <div className="bodyShapeRight"></div>
                                 <div className="armShadowRight"></div>
                            </div>
                      </div>
                      <div className="avatarBodyLeft">
                            <div className="collar"></div>
                            <div className="leftArm">
                                <div className="bodyShapeLeft"></div>
                                <div className="armShadowLeft"></div>
                             </div>
                      </div>
                  </div>
          </div>
  }
}

export default AboutMe
