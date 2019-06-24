import React from 'react';
import '../css/App.css';
import "animate.css/animate.min.css";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Work from "./Work";
import Gusto from "./Gusto";
import Facebook from "./Facebook";
import Contact from "./Contact";
import "./Nav";

// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
const history: History = createHistory()

history.listen((location, action) => {
     // if(`${location.pathname}${location.search}${location.hash}`==="/about") {
     //    document.getElementById('app').classList.add("bg-gray-900");
     // }
     // console.log(`The last navigation action was ${action}`)
     document.getElementById('main-nav').classList.add('hidden');
     document.getElementById('close-button').classList.add('hidden');
     document.getElementById('burger-button').classList.remove('hidden');
})

export default class App extends React.Component {
  // listenScrollEvent = e => {
  //   var app = document.getElementById('app');
  //   if (window.scrollY < 400) {
  //     app.classList.add("bg-gray-900")
  //     app.classList.remove("bg-white")
  //   } else {
  //     app.classList.add("bg-white")
  //     app.classList.remove("bg-gray-900")
  //   }
  // }
  //
  // componentDidMount() {
  //   document.getElementById('app').classList.add("bg-gray-900");
  //   window.addEventListener('scroll', this.listenScrollEvent);
  //   window.scrollTo(0, 0);
  // }

  render() {
    return (
      <Router history={history}>
        <div className="flex flex-col min-h-screen antialiased">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/gusto" component={Gusto} />
          <Route path="/facebook" component={Facebook} />
          <Route path="/contact" component={Contact} />
        </div>
        <Footer />
      </Router>
    );
  }
}
