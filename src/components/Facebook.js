import React from 'react';
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

import FrameworkIA from '../img/facebook/framework-ia.png';
import Framework from '../img/facebook/framework.png';
import ScrollIA from '../img/facebook/scroll-ia.png';
import Scroll from '../img/facebook/scroll.png';
import Before1 from '../img/facebook/before-1.png';
import Before2 from '../img/facebook/before-2.png';
import Framework1 from '../img/facebook/framework-1.png';
import Framework2 from '../img/facebook/framework-2.png';
import Framework3 from '../img/facebook/framework-3.png';
import Framework4 from '../img/facebook/framework-4.png';
import Framework5 from '../img/facebook/framework-5.png';
import Visual1 from '../img/facebook/visual-1.png';
import Visual2 from '../img/facebook/visual-2.png';
import Visual3 from '../img/facebook/visual-3.png';
import Visual4 from '../img/facebook/visual-4.png';
import Visual5 from '../img/facebook/visual-5.png';
import Fillmore from '../img/facebook/Fillmore.png';
import Lombard from '../img/facebook/Lombard.png';
import Polk from '../img/facebook/Polk.png';
import Valencia from '../img/facebook/Valencia.png';
import Services from '../img/facebook/Services.png';
import Shop from '../img/facebook/Shop.png';
import Groups from '../img/facebook/Groups.png';
import Events from '../img/facebook/Events.png';
import GustoCover from '../img/gusto/gusto-health-renewal.png';


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
      <div className="md:max-w-3xl mx-auto px-8">
        <h3 className="mt-16 mb-2 text-center text-lg font-bold">Case Study</h3>
        <h1 className="mb-4 md:mx-8 text-center text-6xl font-bold leading-tight">Facebook Pages Mobile Redesign</h1>
        <h3 className="my-16 text-center uppercase text-sm text-gray-600">UI | UX | Product Thinking</h3>
        <p className="font-serif">Facebook Pages help businesses  engage with their customers and communities.
        This consumer mobile redesign enabled Pages to be best presence for a business, and helped people connect,
        communicate and transact with business owners. The resulting design framework allowed Pages partner teams to optimize for
        their divergent use cases and goals.
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
      <section className="pt-16 pb-8 bg-gray-100 mb-32">
        <div className="max-w-3xl mx-auto px-8 mb-8">
          <h5 className="uppercase text-xs text-gray-600 mb-2">Status</h5>
          <ul className="font-serif">
            <li><strong>Launched</strong> in 2018</li>
          </ul>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row">
          {/* <div className="px-8 mb-8">
            <h5 className="uppercase text-xs text-gray-600 mb-2">Status</h5>
            <ul className="font-serif">
              <li><strong>Launched</strong> in 2018</li>
            </ul>
          </div> */}
          <div className="mb-8 px-8 flex-1">
            <h5 className="uppercase text-xs text-gray-600 mb-2">Problems</h5>
            <ul className="list-disc">
              <li className="mb-2">People find it difficult to do the things they expect to do when wanting
                to interact with a Business (of any type) on Facebook.</li>
              <li className="mb-2">People want to find, consider and learn about businesses before interacting with them.</li>
              <li className="mb-2">Partner teams have found the existing Page layout difficult to support goals specific to their vertical.</li>
            </ul>
          </div>
          <div className="px-8 flex-1">
            <h5 className="uppercase text-xs text-gray-600 mb-2">Goals</h5>
            <ul className="list-disc">
              <li className="mb-2">Enable Pages to become the best place to research, communicate and transact with a business.</li>
              <li className="mb-2">Enable partner teams to build custom experiences on Pages that optimize for their problems and goals.</li>
              <li className="mb-2">Create a consistent design framework across all Pages and maintain consistency with other Facebook Entities.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto mb-32 px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(1)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Define Goals and Success
        </h2>
        <p className="font-serif">As the design lead for creating the Pages mobile platform design framework, I helped
        the team define product vision and direction.</p>
        <ul className='mt-8 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li className="mb-2">Partnered with PM to define people problems and product goals</li>
          <li className="mb-2">Advocated for product quality as a way to measure success</li>
          <li className="mb-2">Collaborated with my design partner on design scope and timeline</li>
        </ul>
      </section>
      <section className="max-w-3xl mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(2)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Understand Partner Team Needs
        </h2>
        <p className="font-serif">In order to create a design framework and provide a set of principles and guidelines for
          a variety of vertical partner teams (e.g. Food & Drink, Services, Shows, News), I worked closely with partner
          team designers to understand their divergent use cases, team goals and roadmap.
        </p>
        <p className="mt-8">Here are two examples of existing
          Pages that are unable to optimize for their consumers' divergent needs.</p>
        {/* <ul className='my-8 md:mb-12 list-disc ml-4'>
          <li className="mb-2">Food & Drink team needed to optimize for business information, menus and reviews.
</li>
          <li className="mb-2">Shows team needed to optimize for cover video, visual narrative and show episodes.</li>
        </ul> */}
        <div className="flex flex-col md:flex-row mt-16 pb-32 overflow-hidden">
          <div className="flex md:w-2/3 mb-8 md:pr-8">
            <ScrollAnimation animateIn='fadeInUp' className="mr-4 rounded-lg overflow-hidden shadow-lg">
              <img src={Before1} alt="Interaction"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={200} className="ml-4 rounded-lg overflow-hidden shadow-lg">
              <img src={Before2} alt="Interaction"/>
            </ScrollAnimation>
          </div>
          <div className="md:w-1/3">
            <ul className='font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
              <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
              <li className="mb-2">Food & Drink team needed to optimize for business information, menus and reviews.</li>
              <li className="mb-2">Shows team needed to optimize for cover video, visual narrative and show episodes.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(3)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Cross-team Alignment
        </h2>
        <p className="font-serif">Collaborated with Facebook Design Systems and other entity teams to create a consistent entity
           header area across Facebook (e.g. Profile, Events, Marketplace, Groups).</p>
        <div className="flex flex-col md:flex-row mt-8 md:mt-16 mb-32">
          <ScrollAnimation animateIn='fadeInUp' className="mb-8 md:pr-4">
            <img className="rounded-lg shadow-lg" src={Shop} alt="Interaction"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={200} className="mb-8 md:px-4">
            <img className="rounded-lg shadow-lg" src={Services} alt="Interaction"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={300} className="md:px-4">
            <img className="rounded-lg shadow-lg" src={Groups} alt="Interaction"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={500} className="md:pl-4">
            <img className="rounded-lg shadow-lg" src={Events} alt="Interaction"/>
          </ScrollAnimation>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 mb-16">
        <h5 className="mb-2 text-center uppercase font-bold">(4)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Design Explorations
        </h2>
        <p className="font-serif">This is my favorite part of the design process.
          Divergent thinking and rapid design iterations to push boundaries as well as setting constraints. There were two areas of focus for me:</p>
        <ul className='mt-8 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li className="mb-2">Explorations of a scalable design system across multiple Page verticals</li>
          <li className="mb-2">Visual explorations of shared components for small business Pages</li>
        </ul>
      </section>
      <section className="mb-32 md:bg-blue-100 md:pt-16 md:pb-24 md:overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          <div className="flex mt-8 mx-8 md:mr-4">
            <ScrollAnimation animateIn='fadeInUp' className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Fillmore} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={200} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Polk} alt="Wireframe"/>
            </ScrollAnimation>
            {/* <ScrollAnimation animateIn='fadeInUp' delay={500} className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Valencia} alt="Wireframe"/>
            </ScrollAnimation> */}
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Lombard} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
          <div className="flex items-start mt-8 mx-8 md:ml-4">
            <div className="flex flex-col">
            <ScrollAnimation animateIn='fadeInUp' delay={200} className="mb-8 mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Visual1} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={300} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Visual2} alt="Wireframe"/>
            </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn='fadeInUp' className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Visual3} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Visual4} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 mb-16">
        <h5 className="mb-2 text-center uppercase font-bold">(5)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Design Framework
        </h2>
        <div className="flex pb-16 overflow-hidden">
          <ScrollAnimation animateIn='fadeInUp' className="mr-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={FrameworkIA} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={200} className="mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Framework} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={300} className="mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={ScrollIA} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={500} className="ml-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Scroll} alt="Wireframe"/>
          </ScrollAnimation>
        </div>
        <p className="font-serif">Stuff</p>
        <ul className='mt-8 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li className="mb-2">Framework explorations to bring consistency across all verticals while providing flexibility for partner teams to optimize for their needs</li>
          <li className="mb-2">Finalized design proposals and framework guidelines</li>
          <li className="mb-2">Presented to Pages leads and got their feedback and buy-in</li>
        </ul>

      </section>
      <section className="mb-32 md:bg-blue-100 md:pb-24 pt-16 md:overflow-hidden">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          <ScrollAnimation animateIn='fadeInUp' className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Framework1} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={200} className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Framework2} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={300} className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Framework3} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={500} className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Framework4} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' delay={600} className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Framework5} alt="Wireframe"/>
          </ScrollAnimation>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 mb-8 md:mb-12">
        <h5 className="mb-2 text-center uppercase font-bold">(6)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Redesign Local Page Components
        </h2>
        <p className="font-serif">
          Stuff
        </p>
        <ul className='mt-8 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li className="mb-2">Define what are the shared framework components for all Local Pages</li>
          <li className="mb-2">Collaborate with key partner teams to refine individual components</li>
          <li className="mb-2">Local Discovery on Ratings and Reviews</li>
          <li className="mb-2">Food & Drink on Menu</li>
        </ul>
      </section>
      {/* <section className="mb-32 md:bg-gray-100 md:pt-8 md:overflow-hidden">
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
          <ScrollAnimation animateIn='fadeInUp' delay={500} className="self-end mx-8 mt-8 md:mx-4 rounded-lg md:rounded-b-none shadow-lg overflow-hidden">
            <img className="" src={Final5} alt="Wireframe"/>
          </ScrollAnimation>
        </div>
      </section> */}
      <section className="max-w-3xl mb-32 mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(7)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Refine and Build Platform Components
        </h2>
        <p className="font-serif">Align with partner teams
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-8 mb-32">
          {/* <ScrollAnimation animateIn='fadeInUp' className="md:w-1/3 mb-8 md:pr-16">
            <img className="rounded-lg shadow-lg" src={Research} alt="Interaction"/>
          </ScrollAnimation> */}
          <div className="md:w-2/3 mb-8">
            <ul className='font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
              <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
              <li className="mb-2">Entity Header</li>
              <li className="mb-2">About Card</li>
              <li className="mb-2">Media Experience (Cover, Photos, Videos)</li>
              <li className="mb-2">Highlights  - Co-owned</li>
              <li className="mb-2">Related Pages  - Co-owned</li>
              <li className="mb-2">Recommendations - Co-owned</li>
              <li className="mb-2">Menu - Partner</li>
              <li className="mb-2">Posts - Partner</li>
            </ul>
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
          <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/quantcast">Prev</Link>
        </li>
        <li>
          <Link className="py-2 mx-3 uppercase tracking-wide underline" to="/gusto">Next</Link>
        </li>
      </ul>
    </section>
  );
}
