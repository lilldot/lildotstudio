import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";
import Before from '../img/qc/old_profile.png';
import After from '../img/qc/new.png';

export default class FacebookRedesign extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main>
        <Intro />
        <Details />
        <Pagination />
      </main>
    );
  }
}

function Intro() {
  return (
    <section className="flex flex-col mt-8 overflow-hidden">
      <div className="md:max-w-3xl mx-auto px-8">
        <h3 className="mt-16 mb-2 text-center md:text-lg font-bold">Selected Work</h3>
        <h1 className="mb-4 md:mx-8 text-center text-3xl md:text-6xl font-bold leading-tight">Facebook Redesign</h1>
        <h3 className="my-16 text-center uppercase text-sm text-gray-600">UI | UX | Product Thinking</h3>
        <p className="font-serif">This mobile and web redesign is Facebook's biggest redesign in years. The cleaner and more modern design
           aims to simplify and declutter the existing UI.
        </p>
      </div>
    </section>
  );
}

function Details() {
  return (
    <section className="flex flex-col mt-12 pb-24 overflow-hidden">
      <div className="md:max-w-3xl flex mx-auto px-8">
        <div className="flex flex-col items-center flex-1 pr-4">
          <p className="font-medium text-gray-600 text-xs uppercase mb-4">Before</p>
          <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut" className="rounded-xl shadow-lg overflow-hidden">
            <img src={Before} alt="Quantcast Before"/>
          </ScrollAnimation>
        </div>
        <div className="flex flex-col items-center flex-1 pl-4">
          <p className="font-medium text-gray-600 text-xs uppercase mb-4">After</p>
          <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut" className="rounded-xl shadow-lg overflow-hidden">
            <img src={After} alt="Quantcast After"/>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

function Pagination() {
  return (
    <section>
      <ul className="max-w-6xl mx-auto p-16 flex flex-row justify-between">
        <li>
          <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/gusto">Prev</Link>
        </li>
        <li>
          <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/facebook">Next</Link>
        </li>
      </ul>
    </section>
  );
}
