import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

export default class Quantcast extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main>
        <Intro />
      </main>
    );
  }
}

function Intro() {
  return (
    <section className="flex flex-col mt-8 overflow-hidden">
      <div className="md:max-w-3xl mx-auto px-8">
        <h3 className="mt-16 mb-2 text-center md:text-lg font-bold">Case Study</h3>
        <h1 className="mb-4 md:mx-8 text-center text-3xl md:text-6xl font-bold leading-tight">Facebook Pages Mobile Redesign</h1>
        <h3 className="my-16 text-center uppercase text-sm text-gray-600">UI | UX | Product Thinking</h3>
        <p className="font-serif">Facebook Pages help 90 million small businesses  engage with their customers and communities.
        This consumer mobile redesign enables Pages to be the best presence for a business, and helps people connect,
        communicate and transact with business owners. The resulting design framework allows Pages partner teams to optimize for
        their divergent use cases and goals.
        </p>
      </div>
    </section>
  );
}
