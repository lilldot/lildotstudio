import React from 'react';
import '../css/App.css';

import Home from "./Home";
import Process from "./Process";
import Work from "./Work";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen text-grey-darkest antialiased">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/process" component={Process} />
        <Route path="/work" component={Work} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
