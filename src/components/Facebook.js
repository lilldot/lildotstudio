import React from 'react';
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

import FrameworkIA from '../img/facebook/framework-ia.png';
import Framework from '../img/facebook/framework.png';
import ScrollIA from '../img/facebook/scroll-ia.png';
import Scroll from '../img/facebook/scroll.png';
import Before1 from '../img/facebook/before-1.png';
import Before2 from '../img/facebook/before-2.png';
// import Before3 from '../img/facebook/before-3.png';
// import Before4 from '../img/facebook/before-4.png';

import Final from '../img/facebook/final.mov';
import Launchpad from '../img/facebook/launchpad.mov';

import Framework1 from '../img/facebook/framework-1.png';
import Framework2 from '../img/facebook/framework-2.png';
import Framework3 from '../img/facebook/framework-3.png';
import Framework4 from '../img/facebook/framework-4.png';
import Framework5 from '../img/facebook/framework-5.png';
import Framework6 from '../img/facebook/framework-6.png';
import Visual1 from '../img/facebook/visual-1.png';
import Visual2 from '../img/facebook/visual-2.png';
import Visual3 from '../img/facebook/visual-3.png';
import Visual4 from '../img/facebook/visual-4.png';
// import Visual5 from '../img/facebook/visual-5.png';
// import Visual6 from '../img/facebook/visual-6.png';
import Visual7 from '../img/facebook/visual-7.png';
import Visual8 from '../img/facebook/visual-8.png';
import Fillmore from '../img/facebook/Fillmore.png';
import Lombard from '../img/facebook/Lombard.png';
import Polk from '../img/facebook/Polk.png';
// import Valencia from '../img/facebook/Valencia.png';
import Services from '../img/facebook/Services.png';
import Shop from '../img/facebook/Shop.png';
import Groups from '../img/facebook/Groups.png';
import Events from '../img/facebook/Events.png';
import About from '../img/facebook/about.png';
import Hours from '../img/facebook/hours.png';
import Highlights from '../img/facebook/highlights.png';
import Reviews from '../img/facebook/reviews.png';
import Menu from '../img/facebook/menu.png';
// import Photos from '../img/facebook/photos.png';
import Photo1 from '../img/facebook/photo-1.png';
import Photo2 from '../img/facebook/photo-2.png';
import Photo3 from '../img/facebook/photo-3.png';
import Photo4 from '../img/facebook/photo-4.png';
import Photo5 from '../img/facebook/photo-5.png';
import Photo6 from '../img/facebook/photo-6.png';
import Photo7 from '../img/facebook/photo-7.png';
import Photo8 from '../img/facebook/photo-8.png';
import Media from '../img/facebook/media-experience.mov';

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
        <h3 className="mt-16 mb-2 text-center md:text-lg font-bold">Case Study</h3>
        <h1 className="mb-4 md:mx-8 text-center text-3xl md:text-6xl font-bold leading-tight">Facebook Pages Mobile Redesign</h1>
        <h3 className="my-16 text-center uppercase text-sm text-gray-600">UI | UX | Product Strategy</h3>
        <p className="font-serif">Facebook Pages help 90 million small businesses  engage with their customers and communities.
        This consumer mobile redesign enables Pages to be the best presence for a business and helps people connect,
        communicate and transact with business owners. The resulting design framework allows Pages partner teams to optimize for
        their divergent use cases and goals.
        </p>
        {/* <div className="flex items-center mb-16"> */}
          {/* <ScrollAnimation animateIn='fadeInUp' className="w-1/5 mx-4 rounded-lg overflow-hidden shadow-lg">
            <img src={Before1} alt="Interaction"/>
          </ScrollAnimation> */}
          {/* <div className="w-2/5 pl-8 flex flex-col">
            <ScrollAnimation animateIn='fadeInUp' className="rounded-xl overflow-hidden shadow-lg">
              <img src={Before1} alt="Interaction" className=""/>
            </ScrollAnimation>
          </div> */}
          {/* <div className="rounded-full border border-black px-4 py-2">→</div> */}
          <ScrollAnimation animateIn='fadeInUp' className="w-4/5 mx-auto">
            <video autoPlay loop>
              <source src={Final} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </ScrollAnimation>
        {/* </div> */}
      </div>
    </section>
  );
}

function Detail() {
  return (
    <div>
      <section className="py-24 bg-gray-100 mb-32">
        <div className="max-w-3xl mx-auto px-8 mb-8">
          <h5 className="uppercase text-xs text-gray-600 mb-2">Status</h5>
          <ul className="font-serif">
            <li>
              <strong>Launched</strong> in 2018
              (<a
                href="https://techcrunch.com/2018/08/06/facebook-business-pages/"
                target="_blank"
                className="font-medium border-b border-dotted border-gray-900"
                rel="noopener noreferrer"
                >read more
              </a>)
            </li>
          </ul>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row">
          {/* <div className="px-8 mb-8">
            <h5 className="uppercase text-xs text-gray-600 mb-2">Status</h5>
            <ul className="font-serif">
              <li><strong>Launched</strong> in 2018</li>
            </ul>
          </div> */}
          <div className="mb-8 md:mb-0 px-8 flex-1">
            <h5 className="uppercase text-xs text-gray-600 mb-2">Problems</h5>
            <ul className="list-disc ml-4">
              <li className="mb-2">People find it difficult to interact with a Business (of any type) on Facebook.</li>
              <li className="mb-2">People want to find, consider and learn about businesses before interacting with them.</li>
              <li className="mb-2">Partner teams found the existing Page layout did not readily support goals specific to their vertical.</li>
            </ul>
          </div>
          <div className="px-8 flex-1">
            <h5 className="uppercase text-xs text-gray-600 mb-2">Goals</h5>
            <ul className="list-disc ml-4">
              <li className="mb-2">Enable Pages to become the best place to research, communicate and transact with a business.</li>
              <li className="mb-2">Enable partner teams to build custom experiences on Pages that optimize for their problems and goals.</li>
              <li className="mb-2">Create a consistent design framework across all Pages and maintain consistency with other Facebook entities.</li>
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
          <div className="flex md:w-2/3 mb-16 md:mb-0 md:pr-8">
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
          Cross-Team Alignment
        </h2>
        <p className="font-serif">I collaborated with Facebook Design Systems and other entity teams to create a consistent entity
           header area across Facebook (e.g. Profile, Events, Marketplace, Groups).</p>
        <div className="flex flex-col md:flex-row mt-12 md:mt-16 mb-32">
          <div className="flex">
            <ScrollAnimation animateIn='fadeInUp' className="mr-2 md:mr-4">
              <img className="rounded-lg shadow-lg" src={Shop} alt="Interaction"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={200} className="ml-2 md:mx-4">
              <img className="rounded-lg shadow-lg" src={Services} alt="Interaction"/>
            </ScrollAnimation>
          </div>
          <div className="flex mt-8 md:m-0">
            <ScrollAnimation animateIn='fadeInUp' delay={300} className="mr-2 md:mx-4">
              <img className="rounded-lg shadow-lg" src={Groups} alt="Interaction"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="ml-2 md:ml-4">
              <img className="rounded-lg shadow-lg" src={Events} alt="Interaction"/>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 mb-16">
        <h5 className="mb-2 text-center uppercase font-bold">(4)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Design Explorations
        </h2>
        <ScrollAnimation animateIn='fadeIn' className="overflow-hidden mx-8 md:w-3/5 md:mx-auto mb-16">
          <video autoPlay loop>
            <source src={Launchpad} type="video/mp4" />
          Your browser does not support the video tag.
          </video>
        </ScrollAnimation>
        <p className="font-serif">This is my favorite part of the design process&mdash;
        divergent thinking and rapid design iterations to push boundaries but also define constraints. There were two areas of focus for me:</p>
        <ul className='mt-8 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li className="mb-2">Explorations of a scalable design system across multiple Page verticals</li>
          <li className="mb-2">Visual explorations of shared components for small business Pages</li>
        </ul>
      </section>
      <section className="mb-32 md:bg-blue-100 md:py-24 md:overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          <div className="flex mx-8 md:mr-4">
            <ScrollAnimation animateIn='fadeInUp' className="mr-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Fillmore} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={200} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Polk} alt="Wireframe"/>
            </ScrollAnimation>
            {/* <ScrollAnimation animateIn='fadeInUp' delay={500} className="mx-8 mt-8 md:mx-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Valencia} alt="Wireframe"/>
            </ScrollAnimation> */}
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="ml-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Lombard} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
          <div className="flex items-start mt-8 md:mt-0 mx-8 md:ml-4">
            <div className="flex flex-col">
              <ScrollAnimation animateIn='fadeInUp' delay={200} className="mb-8 mr-2 rounded-lg shadow-lg overflow-hidden">
                <img className="" src={Visual1} alt="Wireframe"/>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' delay={300} className="mr-2 rounded-lg shadow-lg overflow-hidden">
                <img className="" src={Visual2} alt="Wireframe"/>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn='fadeInUp' className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Visual3} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="ml-2 rounded-lg shadow-lg overflow-hidden">
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
        <div className="flex flex-col sm:flex-row pb-16 sm:overflow-hidden">
          <div className="flex sm:mr-2 md:mr-4 pb-8 sm:pb-0">
            <ScrollAnimation animateIn='fadeInUp' className="mr-2 md:mr-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={FrameworkIA} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={200} className="ml-2 md:ml-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Framework} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
          <div className="flex sm:ml-2 md:ml-4">
            <ScrollAnimation animateIn='fadeInUp' delay={300} className="mr-2 md:mr-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={ScrollIA} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="ml-2 md:ml-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Scroll} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
        </div>
        <p className="font-serif">I proposed the design framework after various iterations and feedback from partner teams.
          The framework design system and guidelines enforced consistency across all
        Pages while providing flexibility for partner teams to optimize for their people problems and goals.</p>
        <ul className='mt-8 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li className="mb-2">Optimized consideration signals, social context, and transactional needs for local businesses</li>
          <li className="mb-2">Prioritized visual content and discovery of the most relevant information</li>
          <li className="mb-2">The system is simple and flexible while on brand and consistent with other Facebook experiences</li>
        </ul>
      </section>
      <section className="mb-32 md:bg-blue-100 md:py-24 md:overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row">
          <div className="flex md:m-0">
            <ScrollAnimation animateIn='fadeInUp' className="mr-2 md:mr-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Framework1} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={200} className="mx-2 md:mx-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Framework2} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={300} className="ml-2 md:mx-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Framework3} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
          <div className="flex mt-8 md:m-0">
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="mr-2 md:mx-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Framework4} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={600} className="mx-2 md:ml-4 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Framework5} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={600} className="ml-2 md:hidden rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Framework6} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8 md:mb-16">
        <h5 className="mb-2 text-center uppercase font-bold">(6)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Redesign Local Page Components
        </h2>
        <p className="font-serif">
          Beyond the design framework, we focused the redesign on consumer experience for local businesses. My design partner and I
          identified the shared units for all Local Pages and collaborated with partner teams to refine individual components.
        </p>
        <ul className='mt-8 font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
          <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
          <li className="mb-2"><b>Highlights</b> to help people stay updated to small businesses they follow</li>
          <li className="mb-2"><b>About</b> to help people understand what this business has to offer</li>
          <li className="mb-2"><b>Ratings</b> and reviews to provide the most important considration signals</li>
          <li className="mb-2"><b>Menu</b> to help people decide if this business is right for them</li>
        </ul>
      </section>
      <section className="mb-32 md:bg-blue-100 pt-16 md:pt-24 md:pb-16 md:overflow-hidden">
        <div className="max-w-5xl md:mx-auto px-8 flex flex-col md:flex-row">
          <div className="flex items-start mb-8 md:mr-2">
            <div className="flex flex-col">
              <ScrollAnimation animateIn='fadeInUp' className="mr-2 bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="" src={Visual8} alt="Wireframe"/>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' delay={200} className="mt-4 mr-2 rounded-lg shadow-lg overflow-hidden">
                <img className="" src={Highlights} alt="Wireframe"/>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn='fadeInUp' delay={300} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={About} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="ml-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Hours} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
          <div className="flex items-start md:ml-2">
            <ScrollAnimation animateIn='fadeInUp' className="mr-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Visual7} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={300} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Reviews} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="ml-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Menu} alt="Wireframe"/>
            </ScrollAnimation>
            {/* <ScrollAnimation animateIn='fadeInUp' delay={500} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Photos} alt="Wireframe"/>
            </ScrollAnimation> */}
          </div>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-8">
        <h5 className="mb-2 text-center uppercase font-bold">(7)</h5>
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight">
          Refine and Build Platform Components
        </h2>

        <p className="font-serif">
          I worked closely with my design parter, engineers, data science and other XFN members to finalize the experience
          for the key components of the redesign. We achieved a successful launch with a huge gain in topline metrics.
          Here are some examples of media experience components.
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-16">
          <ScrollAnimation animateIn='fadeIn' className="shadow-lg rounded-xl md:mr-8 mb-16 overflow-hidden md:w-1/2">
            <video autoPlay loop>
              <source src={Media} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          </ScrollAnimation>
          <div className="md:w-1/2">
            <ul className='font-serif text-gray-800 text-sm border-l pl-4 leading-more'>
              <li className="text-lg italic mb-2"><strong>e.g.</strong></li>
              <li className="mb-2">Media Experience (Cover, Photos, Videos)</li>
              <li className="mb-2">About Card</li>
              <li className="mb-2">Header Details</li>
              <li className="mb-2">Highlights - <i>Co-owned</i></li>
              <li className="mb-2">Related Pages - <i>Co-owned</i></li>
              <li className="mb-2">Recommendations - <i>Co-owned</i></li>
              <li className="mb-2">Menu - <i>Design Partner</i></li>
              <li className="mb-2">Posts - <i>Design Partner</i></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="md:bg-blue-100 pt-16 md:pt-24 pb-16 md:overflow-hidden">
        <div className="max-w-5xl md:mx-auto px-8 flex flex-col md:flex-row">
          <div className="flex items-start pb-8 md:mr-2">
            <div className="flex flex-col">
              <ScrollAnimation animateIn='fadeInUp' className="mr-2 bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="" src={Photo1} alt="Wireframe"/>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' delay={200} className="mt-4 mr-2 rounded-lg shadow-lg overflow-hidden">
                <img className="" src={Photo2} alt="Wireframe"/>
              </ScrollAnimation>
              <ScrollAnimation animateIn='fadeInUp' delay={300} className="mt-4 mr-2 rounded-lg shadow-lg overflow-hidden">
                <img className="" src={Photo3} alt="Wireframe"/>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Photo4} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="ml-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Photo5} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
          <div className="flex items-start md:ml-2">
            <ScrollAnimation animateIn='fadeInUp' delay={300} className="mr-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Photo6} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' delay={500} className="mx-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Photo7} alt="Wireframe"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' className="ml-2 rounded-lg shadow-lg overflow-hidden">
              <img className="" src={Photo8} alt="Wireframe"/>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}

function Pagination() {
  return (
    <section>
      <ul className="max-w-6xl mx-auto py-16 px-4 md:px-16 flex flex-row justify-between">
        <li>
          <Link className="py-2 mx-3 text-sm hover:line-through" to="/quantcast">← Previous</Link>
        </li>
        <li>
          <Link className="py-2 mx-3 text-sm hover:line-through" to="/gusto">Next →</Link>
        </li>
      </ul>
      <ul id="pagination" className="hidden md:flex w-full px-4 lg:px-8 mx-auto text-gray-900 half fixed flex-row justify-between">
        <li className="rotate">
          <Link className="py-1 px-2 bg-white rounded-xl opacity-75 hover:opacity-100 text-sm hover:font-semibold" to="/quantcast">( Prev )</Link>
        </li>
        <li className="rotate rotate-90">
          <Link className="py-1 px-2 bg-white rounded-xl opacity-75 hover:opacity-100 text-sm hover:font-semibold" to="/gusto">( Next )</Link>
        </li>
      </ul>
    </section>
  );
}
