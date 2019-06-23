import React from 'react';
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

import GustoCover from '../img/gusto/gusto-health-renewal.png';
import renewalIA from '../img/gusto/renewal-ia.svg';
import Lofi1 from '../img/gusto/lofi-1.png';
import Lofi2 from '../img/gusto/lofi-2.png';
import Lofi3 from '../img/gusto/lofi-3.png';
import Hifi1 from '../img/gusto/hifi-1.png';
import Hifi2 from '../img/gusto/hifi-2.png';
import Hifi3 from '../img/gusto/hifi-3.png';
import Hifi4 from '../img/gusto/hifi-4.png';
import Hifi5 from '../img/gusto/hifi-5.png';
import Final1 from '../img/gusto/final-1.png';
import Final2 from '../img/gusto/final-2.png';
import Final3 from '../img/gusto/final-3.png';
// import Final4 from '../img/gusto/final-4.png';
import Final5 from '../img/gusto/final-5.png';
import Code from '../img/gusto/code.svg';
import Research from '../img/gusto/research.png';
import Post0 from '../img/gusto/post-0.png';
import Post1 from '../img/gusto/post-1.png';
import Post2 from '../img/gusto/post-2.png';
import Post3 from '../img/gusto/post-3.png';
import Post4 from '../img/gusto/post-4.png';
// import Post5 from '../img/gusto/post-5.png';
import Redesign from '../img/gusto/redesign.png';

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
    <section className="flex flex-col mt-8 overflow-hidden">
      <div className="md:max-w-4xl mx-auto px-8">
        <h3 className="mt-16 mb-2 text-center text-lg font-bold">Case Study</h3>
        <h1 className="mb-4 text-center text-6xl font-bold leading-none">Gusto Benefits Renewal Flow</h1>
        <h3 className="my-16 text-center uppercase text-sm text-gray-600">UI | UX | Research | Front-end Components</h3>
        <p className="font-serif">Gusto helps small businesses take care of payroll, HR, and benefits.
          This project enabled business owners to renew benefits they offer to their employees
            for the upcoming year.
          </p>
      </div>
      <ScrollAnimation animateIn='fadeInUp'>
        <img className="w-full max-w-6xl mx-auto anime-fadeInUp" src={GustoCover} alt="Gusto Health Benefits"/>
      </ScrollAnimation>
    </section>
  );
}

function Detail() {
  return (
    <div>
      <section className="pt-16 bg-gray-100 mb-32">
        <div className="max-w-4xl mx-auto px-8 flex flex-col md:flex-row mb-8">
          <div className="md:w-1/3 mb-8">
            <h5 className="uppercase text-xs text-gray-600 ">Status</h5>
            <ul className="font-serif">
              <li><strong>Launched</strong> in 2016</li>
              <li><strong>Updated</strong> in 2017</li>
            </ul>
          </div>
          <div className="md:w-2/3">
            <h5 className="uppercase text-xs text-gray-600 ">Problem</h5>
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
          <h5 className="uppercase text-xs text-gray-600">Goal</h5>
          <p className="text-3xl leading-tight font-bold">Create a self-serve flow that enables business owners
            to renew benefits they offer to their employees for the upcoming year.</p>
        </div>
      </section>
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
          <ScrollAnimation animateIn='fadeInUp' className="md:w-3/5 md:pr-8">
            <img className="mb-8" src={renewalIA} alt="Information Architecture"/>
          </ScrollAnimation>
          <div className="md:w-2/5">
            <ul className='text-gray-800 text-sm font-serif border-l pl-4 leading-more'>
              <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
              <li className="mb-2"><strong>Persona</strong>: a novice small business owner (a.k.a. employer)</li>
              <li className="mb-2"><strong>Scenario</strong>: renewing health plans for the first time</li>
              <li className="mb-2"><strong>User Needs</strong>: pick new health plans that have better coverages while keeping the cost the same</li>
              <li className="mb-2"><strong>Goal</strong>: allow users to give us feedback about their current health plans, and provide plan recommendations that meet their needs</li>
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
          <li className="mb-2"><strong>Step 1</strong>: send a survey to the employer for feedback</li>
          <li className="mb-2"><strong>Step 2</strong>: ask the employer to select a benefit to renew</li>
          <li className="mb-2"><strong>Step 3</strong>: allow the employer to compare different plan recommendations</li>
          <li className="mb-2"><strong>Step 4</strong>: repeat step 2-3 for each benefit</li>
          <li className="mb-2"><strong>Step 5</strong>: confirm their selections</li>
        </ul>
      </section>
      <section className="mb-32 md:bg-gray-100 md:pt-16 md:overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
          <ScrollAnimation animateIn='fadeInUp' className="mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Lofi1} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={300} className="mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Lofi2} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={500} className="mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Lofi3} alt="Wireframe"/>
          </ScrollAnimation>
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
        <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-16 mb-32">
          <ScrollAnimation animateIn='fadeInUp' className="md:w-1/3 mb-8 md:pr-4">
            <img className="rounded-lg shadow-lg" src={Hifi1} alt="Interaction"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={300} className="md:w-1/3 mb-8 md:pl-4">
            <img className="rounded-lg shadow-lg" src={Hifi2} alt="Interaction"/>
          </ScrollAnimation>
          <div className="md:w-1/3 md:pl-8">
            <ul className='font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
              <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
              <li className="mb-2"><strong>Option 1</strong>: represent selection with a shopping cart like badge</li>
              <li className="mb-2"><strong>Option 2</strong>: selected label beneath the tab title</li>
            </ul>
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
          the information very differently. The fact these explorations were done in high fidelity
          helped us get a better sense of the actual user experience.
        </p>
        <ul className='my-8 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li className="mb-2"><strong>Option 1</strong>: group plan recommendations by tabs and allow selection of plans at the bottom</li>
          <li className="mb-2"><strong>Option 2</strong>: group plan recommendations by tabs and allow selection of plans at the top</li>
          <li className="mb-2"><strong>Option 3</strong>: present plan recommendations by wide summary cards, and reveal plan details in a modal</li>
          <li className="mb-2"><strong>Option 4</strong>: present plan recommendations by tall summary cards, and reveal plan details in a modal</li>
        </ul>
      </section>
      <section className="mb-32">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
          <ScrollAnimation animateIn='fadeInLeft' className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Hifi3} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Hifi4} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInRight' className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Hifi5} alt="Wireframe"/>
          </ScrollAnimation>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8 mb-8 md:mb-12">
        <h5 className="mb-2 text-center uppercase font-bold">(5)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Visual Design Prototype & User Testing
        </h2>
        <p className="font-serif">
          These are the final visual design iteration made on Invision as a clickable prototype.
          The prototype was used for getting final buy-ins from stakeholders, user feedback from
          our customers, and final copy and engineering specs.
        </p>
        {/* <ul className='my-8 md:mb-12 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li><strong>Persona</strong>: novice small busines owners and admins</li>
          <li><strong>Scenario</strong>: renewing health plans for the first time</li>
          <li><strong>User needs</strong>: pick new health plans that have better coverages while keeping the cost the same</li>
          <li><strong>Goal</strong>: allow users to give us feedback about their current health plans, and provide plans recommendations that meet their needs.</li>
        </ul> */}
      </section>
      <section className="mb-32 md:bg-gray-100 md:pt-8 md:overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
          <ScrollAnimation animateIn='fadeInUp' className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Final1} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={200} className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Final2} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Final3} alt="Wireframe"/>
          </ScrollAnimation>
          {/* <div className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Final4} alt="Wireframe"/>
          </div> */}
          <ScrollAnimation animateIn='fadeInUp' delay={500} className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Final5} alt="Wireframe"/>
          </ScrollAnimation>
        </div>
      </section>
      <section className="max-w-4xl mb-32 mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(6)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Implement Font-end UI Components
        </h2>

        <div className="flex flex-col sm:flex-row justify-between mt-8 md:mt-16 mb-32">
          <p className="sm:w-2/3 md:pr-16 font-serif">At Gusto, I typically build any new elements/layouts/patterns from scratch,
          and work with engineers on hooking up the data. For pages that already have existing patterns,
          I work closely with engineers on plugging the components in correctly. I would QA and clean up
          the UI before launch to make sure everything look and work as designed.
          </p>
          <ScrollAnimation animateIn='pulse' className="sm:w-1/3 mt-8 sm:mt-0 mx-auto">
            <img className="" src={Code} alt="React and Git"/>
          </ScrollAnimation>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(7)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Post Launch User Research
        </h2>
        <p className="font-serif">To further improve the product and to reduce
          operation cost (after a year of testing the feature in the wild),
          I conducted 9 user interviews with employers who recently went through
          the renewal flow to learn about their experience. I gathered the top
          insights and created actionable proposals to better serve the needs of our users.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-16 mb-32">
          <ScrollAnimation animateIn='fadeInUp' className="md:w-1/3 mb-8 md:pr-16">
            <img className="rounded-lg shadow-lg" src={Research} alt="Interaction"/>
          </ScrollAnimation>
          <div className="md:w-2/3 mb-8">
            <ul className='font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
              <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
              <li className="mb-2"><strong>Insight 1</strong>: 4 of 9 users had issues with the communication process and found the email threads either confusing or left unanswered</li>
              <li className="mb-2"><strong>Recommendation 1</strong>: providing a phone number and personal guidance is essential for users with specific questions in mind</li>
              <li className="mb-2"><strong>Insight 2</strong>: 6 of 9 users want to see more granular options in the survey to get more tailored reccomendations</li>
              <li className="mb-2"><strong>Recommendation 2</strong>:  provide a set of curated options for users to choose what’s most important for them</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8 mb-8 md:mb-12">
        <h5 className="mb-2 text-center uppercase font-bold">(8)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Post Launch Redesign
        </h2>
        <p className="font-serif">
          Based on user survey and testing feedback, I went through a few rounds of lo-fi and hi-fi design
          iterations to explore solutions that would provide better guidance and recommendations for our users.
        </p>
        <ul className='my-8 md:mb-12 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li className="mb-2"><strong>Solution 1</strong>: more granular and tailored questions at the survey step</li>
          <li className="mb-2"><strong>Solution 2</strong>: add a review step for users to review the cost of their current plans before they select plans</li>
          <li className="mb-2"><strong>Solution 3</strong>: more plan options and better presentation of their plan details</li>
        </ul>
      </section>
      <section className="mb-32 md:bg-gray-100 md:pt-8 md:overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          <ScrollAnimation animateIn='fadeInUp' className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Post1} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={200} className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Post2} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={300} className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Post0} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={500} className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Post3} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={600} className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Post4} alt="Wireframe"/>
          </ScrollAnimation>
          {/* <div className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Post5} alt="Wireframe"/>
          </div> */}
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(9)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Redesign User Research
        </h2>
        <p className="font-serif">
          I created a clickable prototype from all the final visual design explorations and tested a few options with 7 users.
          The results were very positive and validated our assumptions for increasing the perceived guidance,
          flexibility and plan options.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-16 mb-24">
          <div className="md:w-2/3 mb-8 md:pr-16">
            <ul className='font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
              <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
              <li className="mb-2"><strong>Insight 1</strong>: 4 of 9 users had issues with the communication process and found the email threads either confusing or left unanswered</li>
              <li className="mb-2"><strong>Recommendation 1</strong>: providing a phone number and personal guidance is essential for users with specific questions in mind</li>
              <li className="mb-2"><strong>Insight 2</strong>: 6 of 9 users want to see more granular options in the survey to get more tailored reccomendations</li>
              <li className="mb-2"><strong>Recommendation 2</strong>:  provide a set of curated options for users to choose what’s most important for them</li>
            </ul>
          </div>
          <ScrollAnimation animateIn='fadeInUp' className="md:w-1/3 mb-8 md:pr-8">
            <img className="rounded-lg shadow-lg" src={Redesign} alt="Redesign Research"/>
          </ScrollAnimation>
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
