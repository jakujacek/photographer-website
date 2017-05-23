
import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Template from './Components/Template.jsx'
import Gallery from './Components/Gallery.jsx'
import AboutMe from './Components/AboutMe.jsx'
import Contact from './Components/Contact.jsx'
require ("../scss/main.scss");
document.addEventListener("DOMContentLoaded", function(){
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Template}>
      <IndexRoute component={Gallery}/>
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>,
  document.getElementById('app')
)
});
