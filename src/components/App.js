import React from 'react';
import '../css/App.css';
import Home from "./Home";
import About from "./About";
import Work from "./Work";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
    </Router>
  );
}

function Header() {
  return (
    <header>
      <ul class="flex">
        <li class="mr-6">
          <Link class="hover:text-grey-800" to="/">Home</Link>
        </li>
        <li class="mr-6">
          <Link class="hover:text-grey-800" to="/about">About</Link>
        </li>
        <li class="mr-6">
          <Link class="hover:text-grey-800" to="/work">Work</Link>
        </li>
      </ul>
    </header>
  );
}

export default App;
