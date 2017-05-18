import React from 'react';
import {Link, IndexLink} from 'react-router'


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
    let lists = "hide"
    if (this.state.toggled) {
      classes += " open";
      lists = "show";
    }
      return <div>
          <section className="main-width">
              <nav id="menu">
              <div className="navBar"></div>
              <ul className={lists}>
                  <li className="liElement"><Link to="/porfolio" className="link" onClick={this.rollMenu}>Porfolio</Link></li>
                  <li className="liElement"><Link to="/blog" className="link" onClick={this.rollMenu}>Blog</Link></li>
                  <li className="liElement"><Link to="/aboutme" className="link" onClick={this.rollMenu}>About Me</Link></li>
                  <li className="liElement"><Link to="/contact" className="link" onClick={this.rollMenu}>Contact</Link></li>
              </ul>
              <div className={classes} onClick={this.rollMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
                {this.props.children}
              </nav>
          </section>
      </div>
  }
}4
export default Template;
