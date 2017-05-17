import "./main.scss";
import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Template from './Components/Template.jsx'
import MainGallery from './Components/MainGallery.jsx'


document.addEventListener("DOMContentLoaded", function(){
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Template}>
      <IndexRoute component={MainGallery}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
});
