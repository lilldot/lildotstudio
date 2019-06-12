import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.svg';

function Header() {
  return (
    <header className="pt-16 text-sm tracking-widest">
      <nav className="max-w-6xl mx-auto flex md:flex-row flex-col items-center md:px-8">
        <ul className="flex flex-1">
          <li>
            <Link className="hover:text-grey-800 py-2 pr-3 uppercase tracking-wide anime-gradientText-dark" to="/">Home</Link>
          </li>
          <li>
            <Link className="hover:text-grey-800 py-2 px-3 uppercase tracking-wide anime-gradientText-dark" to="/process">My Process</Link>
          </li>
          <li>
            <Link className="hover:text-grey-800 py-2 px-3 uppercase tracking-wide anime-gradientText-dark" to="/work">Work</Link>
          </li>
        </ul>
        <div className="flex flex-1">
          <img src={logo} className="h-12 mx-auto" alt="logo" />
        </div>
        <ul className="flex flex-1 justify-end">
          <li>
            <a className="hover:text-grey-800 py-2 px-3 uppercase tracking-wide anime-gradientText-dark" target="_blank" href="https://www.linkedin.com/in/klreyes/">LinkedIn</a>
          </li>
          <li>
            <Link className="hover:text-grey-800 py-2 px-3 uppercase tracking-wide anime-gradientText-dark" to="/contact">Hire Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
