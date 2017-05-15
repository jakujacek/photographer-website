import React from 'react';
class Menu extends React.Component {
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
        <div className="navBar"></div>
        <ul className={lists}>
            <li className="liElement"><a href="#" className="link">weddings</a></li>
            <li className="liElement"><a href="#" className="link">blog</a></li>
            <li className="liElement"><a href="#" className="link">information</a></li>
            <li className="liElement"><a href="#" className="link">contact</a></li>
        </ul>
        <div className={classes} onClick={this.rollMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
  }
}4
export default Menu;
