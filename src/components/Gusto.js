import React from 'react';
import { Link } from "react-router-dom";
import GustoCover from '../img/gusto/gusto-health-renewal.png';
import renewalIA from '../img/gusto/renewal-ia.svg';
import Lofi1 from '../img/gusto/lofi-1.png';
import Lofi2 from '../img/gusto/lofi-2.png';
import Lofi3 from '../img/gusto/lofi-3.png';

import Hifi1 from '../img/gusto/hifi-1.png';
import Hifi2 from '../img/gusto/hifi-2.png';

export default class Gusto extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main>
        <Intro />
        <Detail />
        <Pagination />
      </main>
    );
  }
}

function Intro() {
  return (
    <section className="flex flex-col mt-8">
      <div className="md:max-w-4xl mx-auto px-8">
        <h3 className="mt-16 mb-2 text-center text-lg font-bold">Case Study</h3>
        <h1 className="mb-4 text-center text-6xl font-bold leading-none">Gusto Benefits Renewal Flow</h1>
        <h3 className="my-16 text-center uppercase font-medium text-sm text-gray-600">UI | UX | Research | Front-end Components</h3>
        <p className="font-serif">Gusto helps small businesses take care of payroll, HR, and benefits.
          This project enabled business owners to renew benefits they offer to their employees
            for the upcoming year.
          </p>
      </div>
      <img className="w-full max-w-6xl mx-auto anime-fadeInUp" src={GustoCover} alt="Gusto Health Benefits"/>
      <div className="pt-16 bg-gray-100 mb-32">
        <div className="max-w-4xl mx-auto px-8 flex flex-col md:flex-row mb-8">
          <div className="md:w-1/3 mb-8">
            <h5 className="uppercase text-xs text-gray-600 font-medium">Status</h5>
            <ul className="font-serif">
              <li><strong>Launched</strong> in 2016</li>
              <li><strong>Updated</strong> in 2017</li>
            </ul>
          </div>
          <div className="md:w-2/3">
            <h5 className="uppercase text-xs text-gray-600 font-medium">Problem</h5>
            <p className="font-serif">Current benefits renewal process was painful and error prone.
              Business owners had to manually review benefits options with a insurance broker
              via pdfs and spreadsheets over emails and phone.</p>

            {/* <h5 className="mt-8 uppercase text-xs text-gray-600 font-medium">Goal</h5>
            <p className="font-serif">Create a self-serve flow that enables business owners
              to renew benefits they offer to their employees for the upcoming year.
            </p> */}
          </div>

          {/* <div className="md:w-2/5">
            <h5 className="uppercase text-xs text-gray-600">Goal</h5>
            <p className="text-xl font-medium">Create a self-serve product that enables business owners
              to renew benefits they offer to their employees for the upcoming year.</p>
          </div> */}
        </div>
        {/* <h5 className="uppercase text-xs text-gray-600">Goal</h5>
        <h2 className="border-t border-b py-8 mb-16 text-center text-3xl font-bold leading-tight">
          Create a self-serve flow that enables business owners
          to renew benefits they offer to their employees for the upcoming year.
        </h2> */}
        <div className="max-w-4xl mx-auto px-8 pb-16">
          <h5 className="uppercase text-xs text-gray-600 font-medium">Goal</h5>
          <p className="text-3xl font-bold">Create a self-serve flow that enables business owners
            to renew benefits they offer to their employees for the upcoming year.</p>
        </div>
      </div>
    </section>
  );
}

function Detail() {
  return (
    <div>
      <section className="max-w-4xl mx-auto mb-32 px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(1)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Define Product Goal and IA
        </h2>
        <p className="font-serif">
          I worked closely with the product manager on defining the users and use cases.
          I created a user journey map to visualize the key steps and data points, and helped us better understand
          the problem and contraints.
        </p>
        <div className="mt-8 flex flex-col md:flex-row">
          <div className="md:w-3/5 md:pr-8">
            <img className="anime-fadeInUp mb-8" src={renewalIA} alt="Information Architecture"/>
          </div>
          <div className="md:w-2/5">
            <ul className='text-gray-800 text-sm font-serif border-l pl-4 leading-more'>
              <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
              <li><strong>Persona</strong>: a novice small business owner (a.k.a. employer)</li>
              <li><strong>Scenario</strong>: renewing health plans for the first time</li>
              <li><strong>User Needs</strong>: pick new health plans that have better coverages while keeping the cost the same</li>
              <li><strong>Goal</strong>: allow users to give us feedback about their current health plans, and provide plan recommendations that meet their needs</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(2)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Low Fidelity Flows
        </h2>
        <p className="font-serif">This is the divergent thinking part of my process where I get to explore as many layout and interaction ideas as possible.
          I love this step of the process because I really get to push the boundaries and test the impossible.</p>
        <ul className='my-8 md:mb-12 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li><strong>Step 1</strong>: send a survey to the employer for feedback</li>
          <li><strong>Step 2</strong>: ask the employer to select a benefit to renew</li>
          <li><strong>Step 3</strong>: allow the employer to compare different plan recommendations</li>
          <li><strong>Step 4</strong>: repeat step 2-3 for each benefit</li>
          <li><strong>Step 5</strong>: confirm their selections</li>
        </ul>
      </section>
      <section className="mb-32 md:bg-teal-400 md:pt-8 md:overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
          <div className="mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden anime-fadeInUp">
            <img className="" src={Lofi1} alt="Wireframe"/>
          </div>
          <div className="mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden anime-fadeInUp">
            <img className="" src={Lofi2} alt="Wireframe"/>
          </div>
          <div className="mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden anime-fadeInUp">
            <img className="" src={Lofi3} alt="Wireframe"/>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(3)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          High Fidelity Interactions
        </h2>
        <p className="font-serif">This is an example of a few treatment options for an interaction problem.
          I explored a variety of different solutions ranging from low visual prominence to very high visual prominence.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-8 mb-24">
          <div className="md:w-1/3 mb-8 md:pr-8">
            <ul className='font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
              <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
              <li><strong>Option 1</strong>: selected label beneath the tab title</li>
              <li><strong>Option 2</strong>: represent selection with a shopping cart like badge</li>
              <li><strong>Option 3</strong>: highlight the entire selcted tab</li>
              <li><strong>Option 4</strong>: use icons to differentiate the selected/unselected states</li>
              <li><strong>Option 5</strong>: label the selection in the content area</li>
            </ul>
          </div>
          <div className="md:w-1/3 mb-8 md:pr-4 anime-fadeInUp">
            <img className="rounded-lg shadow-lg" src={Hifi1} alt="Interaction"/>
          </div>
          <div className="md:w-1/3 md:pl-4 anime-fadeInUp">
            <img className="rounded-lg shadow-lg" src={Hifi2} alt="Interaction"/>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(4)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          High Fidelity Information Hierarchy
        </h2>
        <p className="font-serif">
          This is an example of high fidelity design exploration on layout, user interaction and
          information hierarchy. I explored a very wide range of solutions that organize and present
          the information very differently. The fact these explorations were in done in high fidelity
          helped us get a better sense of the actual user experience.
        </p>
        <ul className='my-8 md:mb-12 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li><strong>Option 1</strong>: group plan recommendations by tabs and allow selection of plans at the bottom</li>
          <li><strong>Option 2</strong>: group plan recommendations by tabs and allow selection of plans at the top</li>
          <li><strong>Option 3</strong>: present plan recommendations by wide summary cards, and reveal plan details in a modal</li>
          <li><strong>Option 4</strong>: present plan recommendations by tall summary cards, and reveal plan details in a modal</li>
        </ul>
      </section>
      <section className="mb-32 md:bg-teal-400 md:pt-8 md:overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
          <div className="mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden anime-fadeInUp">
            <img className="" src={Lofi1} alt="Wireframe"/>
          </div>
          <div className="mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden anime-fadeInUp">
            <img className="" src={Lofi2} alt="Wireframe"/>
          </div>
          <div className="mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden anime-fadeInUp">
            <img className="" src={Lofi3} alt="Wireframe"/>
          </div>
        </div>
      </section>
    </div>
  );
}

function Pagination() {
  return (
    <section>
      <ul className="max-w-6xl mx-auto p-8 flex flex-row justify-between">
        <li>
          <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/facebook">Prev</Link>
        </li>
        <li>
          <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/quantcast">Next</Link>
        </li>
      </ul>
    </section>
  );
}
