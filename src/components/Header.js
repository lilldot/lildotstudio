import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.svg';

function Header() {
  return (
    <header className="pt-16 font-sans text-sm tracking-wide">
      <div className="text-center w-full">
        <img src={logo} className="logo mx-auto" alt="logo" />
      </div>
      <nav className="max-w-5xl mx-auto flex md:flex-row flex-col items-center md:justify-between md:px-8">
        <ul className="flex">
          <li className="mr-6">
            <Link className="hover:text-grey-800 uppercase tracking-wide anime-gradientText-dark" to="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link className="hover:text-grey-800 uppercase tracking-wide anime-gradientText-dark" to="/about">About</Link>
          </li>
          <li className="mr-6">
            <Link className="hover:text-grey-800 uppercase tracking-wide anime-gradientText-dark" to="/work">Work</Link>
          </li>
        </ul>
        <ul className="flex">
          <li className="ml-6">
            <Link className="hover:text-grey-800 uppercase tracking-wide anime-gradientText-dark" to="/about">LinkedIn</Link>
          </li>
          <li className="ml-6">
            <Link className="hover:text-grey-800 uppercase tracking-wide anime-gradientText-dark" to="/work">Hire Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
