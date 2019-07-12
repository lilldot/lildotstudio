import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";
import Before from '../img/qc/old_profile.png';
import After from '../img/qc/new.png';

export default class Quantcast extends React.Component {
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
        <h1 className="mb-4 md:mx-8 text-center text-3xl md:text-6xl font-bold leading-tight">Quantcast Measure Redesign</h1>
        <h3 className="my-16 text-center uppercase text-sm text-gray-600">UI | UX | Front-end Development</h3>
        <p className="font-serif">Quantcast's Measure product helps users analyze their website and mobile app audience.
        As the design lead for Quantcast Measure, I led the successful launch of their responsive web
  redesign across navigation, profile, search, in-app help and data visualizations.
        </p>
        {/* <p>
          I partnered with user research, product and engineering on redesigning
          the entire Measure <b>navigation, search, profile design, in-app help</b>, and all of our <b>data visualizations</b> and their <b>detailed interactions</b>.
        </p> */}
        {/* <p>I worked very closely with my design partner during the redesign process, from initial <b>information architecture</b> brainstorming,
          to <b>wireframe sketches</b>, to <b>visual design iterations</b>. I then worked closely with our user researcher on finalizing and testing the interaction details
          of most of our high visibility graphs &mdash; <b>traffic, demographics, cross-platform, geography, audience interests</b> and <b>engagement metrics</b>.</p> */}
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
      <ul className="max-w-6xl mx-auto py-16 px-4 md:px-16 flex flex-row justify-between">
        <li>
          <Link className="py-2 mx-3 text-sm hover:line-through" to="/gusto">← Previous</Link>
        </li>
        <li>
          <Link className="py-2 mx-3 text-sm hover:line-through" to="/facebook">Next →</Link>
        </li>
      </ul>
      <ul id="pagination" className="hidden md:flex w-full mx-auto px-4 lg:px-8 text-gray-900 half fixed flex-row justify-between">
        <li className="rotate">
          <Link className="py-1 px-2 bg-white rounded-xl opacity-75 hover:opacity-100 text-sm hover:font-semibold" to="/gusto">( Prev )</Link>
        </li>
        <li className="rotate rotate-90">
          <Link className="py-1 px-2 bg-white rounded-xl opacity-75 hover:opacity-100 text-sm hover:font-semibold" to="/facebook">( Next )</Link>
        </li>
      </ul>
    </section>
  );
}
