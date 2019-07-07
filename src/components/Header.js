import React, { PropTypes } from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.svg'; //02, 04, 07, 08
import { CSSTransitionGroup } from 'react-transition-group'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  handleHover = (event) => {
    this.setState({ showMenu: true });
  };

  handleLeave = (event) => {
    this.setState({ showMenu: false });
  };

  render() {
    return (
      <header className="mt-12 sm:mt-16 text-sm tracking-widest">
        <nav className="max-w-6xl mx-auto flex justify-end items-center px-6">
          <ul className="hidden sm:flex flex-1">
            <li>
              <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/">Home</Link>
            </li>
            <li className="relative" onMouseLeave={this.handleLeave}>
              <Link onMouseEnter={this.handleHover} className="py-2 mx-3 uppercase tracking-wide underline" to="/facebook">Case Study</Link>
              <div className="submenu-container overflow-hidden">
                <CSSTransitionGroup
                  transitionName="slide"
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
                >
                  { this.state.showMenu && <Submenu /> }
                </CSSTransitionGroup>
              </div>
            </li>
          </ul>
          <Link className="mx-auto" to="/"><img src={logo} className="h-20 sm:h-16" alt="logo" /></Link>
          <ul className="hidden sm:flex sm:flex-1 sm:justify-end">
            <li>
              <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/about">About</Link>
            </li>
            <li>
              <a className="py-2 mx-3 uppercase tracking-wide underline" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/klreyes/">LinkedIn</a>
            </li>
            {/* <li>
              <Link className="py-2 mx-3 uppercase tracking-wide underline" href="mailto:klong128@gmail.com">Hire Me</Link>
            </li> */}
          </ul>
          <button id="burger-button" type="button" className="absolute navbar-burger flex p-6 items-center sm:hidden text-gray-800 focus:outline-none focus:text-gray-900">
            <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path className="animated faster fadeInRight" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
          <button id="close-button" type="button" className="animated faster rotateIn hidden absolute navbar-burger flex p-6 items-center sm:hidden text-gray-800 focus:outline-none focus:text-gray-900">
            <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg>
          </button>
        </nav>
        <div id="mobile-nav" className="text-gray-800 flex flex-col px-8 pt-12 text-lg font-medium sm:hidden hidden">
          <Link className="fadeInDown faster animated py-3 px-4 hover:text-gray-900 hover:line-through focus:bg-gray-100" to="/">Home</Link>
          <Link className="flex items-center fadeInDown faster animated py-3 px-4 hover:text-gray-900 hover:line-through focus:bg-gray-100" to="/facebook">
            <span>Facebook</span><span className="ml-2 text-xs uppercase text-gray-600">Case Study</span>
          </Link>
          <Link className="flex items-center fadeInDown faster animated py-3 px-4 hover:text-gray-900 hover:line-through focus:bg-gray-100" to="/gusto">
            <span>Gusto</span><span className="ml-2 text-xs uppercase text-gray-600">Case Study</span>
          </Link>
          <a className="fadeInDown faster animated py-3 px-4 hover:text-gray-900 hover:line-through focus:bg-gray-100" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/klreyes/">LinkedIn</a>
          <Link className="fadeInDown faster animated pt-3 pb-8 px-4 hover:text-gray-900 hover:line-through focus:bg-gray-100 border-b-2 border-black" to="/about">About</Link>
          {/* <a className="fadeInDown faster animated pt-3 pb-8 px-4 hover:text-gray-900 hover:line-through focus:bg-gray-100 border-b-2 border-black" href="mailto:klong128@gmail.com">Hire Me</a> */}
        </div>
      </header>
    );
  }
}

class Submenu extends React.Component {
  render() {
    return (
      <ul className="flex text-gray-700 flex-col mt-1 pt-3 absolute">
        <li className="uppercase px-3 pb-2 hover:text-black">
          <Link to="/facebook">
            Facebook
          </Link>
        </li>
        <li className="uppercase px-3 pb-2 hover:text-black">
          <Link to="/gusto">
            Gusto
          </Link>
        </li>
      </ul>
    );
  }
}
