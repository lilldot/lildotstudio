import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.svg'; //02, 04, 07, 08

function Header() {
  return (
    <header className="pt-16 text-sm tracking-widest">
      <nav className="max-w-6xl mx-auto flex md:flex-row flex-col items-center md:px-6">
        <ul className="flex flex-1">
          <li>
            <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/">Home</Link>
          </li>
          <li>
            <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/about">About</Link>
          </li>
          <li>
            <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/work">Case Studies</Link>
          </li>
        </ul>
          <img src={logo} className="h-16 mx-auto" alt="logo" />
        <ul className="flex flex-1 justify-end">
          <li>
            <a className="py-2 mx-3 uppercase tracking-wide underline" target="_blank" href="https://www.linkedin.com/in/klreyes/">LinkedIn</a>
          </li>
          <li>
            <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/contact">Hire Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
