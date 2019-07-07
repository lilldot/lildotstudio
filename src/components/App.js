import React from 'react';
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import '../css/App.css';
import "animate.css/animate.min.css";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Work from "./Work";
import Gusto from "./Gusto";
import Facebook from "./Facebook";
import Quantcast from "./Quantcast";
import FacebookRedesign from "./FacebookRedesign";
// import Contact from "./Contact";
import Page404 from "./Page404";
import "./Nav";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
const history: History = createHistory()

library.add(fab, faEnvelope)

history.listen((location, action) => {
     // if(`${location.pathname}${location.search}${location.hash}`==="/about") {
     //    document.getElementById('app').classList.add("about");
     //    document.getElementById('app').classList.add("bg-red-100");
     // }
     // console.log(`The last navigation action was ${action}`)
     document.getElementById('mobile-nav').classList.add('hidden');
     document.getElementById('close-button').classList.add('hidden');
     document.getElementById('burger-button').classList.remove('hidden');
})

export default class App extends React.Component {
  // listenScrollEvent = e => {
  //   var app = document.getElementById('app');
  //   if (window.scrollY < 400 && app.classList.contains('about')) {
  //     app.classList.add("bg-red-100")
  //     app.classList.remove("bg-white")
  //   } else {
  //     app.classList.add("bg-white")
  //     app.classList.remove("bg-red-100")
  //   }
  // }

  // componentDidMount() {
  //   document.getElementById('app').classList.add("bg-red-100");
  //   window.addEventListener('scroll', this.listenScrollEvent);
  //   window.scrollTo(0, 0);
  // }

  render() {
    return (
      <Router history={history}>
        <div className="flex flex-col min-h-screen antialiased">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/gusto" component={Gusto} />
            <Route path="/facebook" component={Facebook} />
            <Route path="/quantcast" component={Quantcast} />
            {/* <Route path="/contact" component={Contact} /> */}
            <Route component={Page404} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
