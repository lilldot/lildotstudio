import React from 'react';
import logo from '../img/logo.svg';

function Home() {
  return (
    <div className="text-center">
      <header className="m-6 p-6 rounded shadow-lg">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="text-base"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
