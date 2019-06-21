import React from 'react';
import '../css/App.css';
import "animate.css/animate.min.css";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Work from "./Work";
import Gusto from "./Gusto";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen antialiased">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/gusto" component={Gusto} />
      </div>
      <Footer />
    </Router>
  );
}


export default App;
