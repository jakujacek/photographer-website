import React from 'react';
import {Link, IndexLink} from 'react-router'
import Slider from './Slider.jsx'
class Template extends React.Component {
  constructor() {
    super()
    this.state = {
      toggled: false
    }
  }
  rollMenu = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  }
  render() {
    let classes = "menu-btn"
    let lists = "listMenu"
    if (this.state.toggled) {
      classes += " open";
      lists = "show";
    }
      return <div>
          <section className="main-width">
              <nav id="menu">
              <div className="navBar"></div>
              <ul className={lists}>
                  <li className="liElement"><Link to="/porfolio" className="link">Porfolio</Link></li>
                  <li className="liElement"><Link to="/blog" className="link">Blog</Link></li>
                  <li className="liElement"><Link to="/aboutme" className="link">About Me</Link></li>
                  <li className="liElement"><Link to="/contact" className="link">Contact</Link></li>
              </ul>
              <div className={classes} onClick={this.rollMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
                <Slider />
              </nav>
          </section>
          <section className="main-width">
            {this.props.children}
          </section>
      </div>
  }
}4
export default Template;
