import "./main.scss";
import React from "react";
import ReactDOM from 'react-dom';
import Menu from './components/Menu.jsx'

class App extends React.Component {
  render() {
    return <section className="main-width">
        <nav id="menu">
          <Menu />
          <div className="slider">
          <div id="logo">Fotoistotni</div>
          </div>

        </nav>
    </section>
  }
}

document.addEventListener("DOMContentLoaded", function(){
ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
});
