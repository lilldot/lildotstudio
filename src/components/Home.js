import React from 'react';
import Quantcast from '../img/qc/qc-cover-2.png';
import Gusto from '../img/gusto/gusto-health-renewal.png';
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import Redesign1 from '../img/facebook/redesign-1.png';
import Redesign2 from '../img/facebook/redesign-2.png';
import Redesign3 from '../img/facebook/redesign-3.png';
import Riders from '../img/riders-for-health.png';
import Droool from '../img/droool.png';
import Framework1 from '../img/facebook/framework-1.png';
import Framework2 from '../img/facebook/framework-2.png';
import Framework3 from '../img/facebook/framework-3.png';
import Framework4 from '../img/facebook/framework-4.png';
import Framework6 from '../img/facebook/framework-6.png';

export default class Home extends React.Component {
 render() {
    return (
      <main>
        <Hero />
        <CaseStudy />
        <Selected />
      </main>
    );
  }
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:justify-center p-8 leading-normal mb-24 mt-20 md:mt-32">
      <ScrollAnimation animateIn='fadeInUp'>
        <h1 className="text-5xl sm:text-6xl leading-tight font-serif font-bold">
          I design refreshingly easy experiences to help people live happier lives.
        </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeInUp' delay={100} className="w-full md:w-2/3 font-sans text-lg sm:text-xl mt-12">
        <p className="text-gray-800">
            Since 2008, I've designed and built mobile and web apps
            for Apple, Facebook, Gusto, Quantcast and other startups. When I'm not designing, I'm
            usually traveling, making art or learning something new.
        </p>
      </ScrollAnimation>
    </section>
  );
}

// function Projects() {
//   return (
//     <section className="max-w-6xl mx-auto py-4">
//       <h2 className="mb-4 text-l tracking-wide font-semibold uppercase px-8">A Few Projects I've Worked On</h2>
//       <div className="flex flex-wrap items-center justify-start">
//         <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
//           <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg cursor-pointer anime-floatUp">
//             <img className="w-full" src="https://stitches.hyperyolo.com/images/demo-bg.png" alt="Sunset in the mountains"/>
//             <div className="p-6 flex flex-col justify-between ">
//               <h3 className="font-medium font-serif mb-4 leading-normal">Facebook Pages Consumer Mobile Redesign
//               </h3>
//               <p className="inline-flex items-center">
//                 <span className="text-sm">Read More</span>
//               </p>
//             </div>
//           </div>
//         </div>
//
//         <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
//           <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg cursor-pointer anime-floatUp">
//             <img className="w-full" src={Gusto} alt="Sunset in the mountains"/>
//             <div className="p-6 flex flex-col justify-between ">
//               <h3 className="font-medium font-serif mb-4 leading-normal">Gusto Benefits Renewal
//               </h3>
//               <p className="inline-flex items-center">
//                 <span className="text-sm">Read More</span>
//               </p>
//             </div>
//           </div>
//         </div>
//
//         <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
//           <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg cursor-pointer anime-floatUp">
//             <img className="w-full" src={Quantcast} alt="Sunset in the mountains"/>
//             <div className="p-6 flex flex-col justify-between ">
//               <h3 className="font-medium font-serif mb-4 leading-normal">Quantcast Redesign
//               </h3>
//               <p className="inline-flex items-center">
//                 <span className="text-sm">Read More</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function CaseStudy() {
  return (
    <section className="max-w-6xl mx-auto py-4">
      <h2 className="text-3xl text-center font-bold p-8 mb-8">Case Study</h2>
        <div className="w-full flex flex-col mb-8 px-8">
          <div>
            {/* <div class="bg-fixed w-full h-64 anime-floatUp mb-8" style={{backgroundImage: "url("+Gusto+")"}}></div> */}
            {/* <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
              <a href="/facebook">
                <img className="w-full h-64" src={Quantcast} alt="Facebook Pages Mobile Redesign"/>
              </a>
            </ScrollAnimation> */}
            <a href="/facebook">
              <div className="flex items-start cross-noodle bg-blue-100 p-8 md:py-20 md:px-24 overflow-hidden">
                  <ScrollAnimation animateIn='fadeInUp' className="mx-2 md:mx-4 rounded-xl shadow-lg overflow-hidden">
                    <img className="" src={Framework1} alt="Wireframe"/>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='fadeInUp' delay={200} className="mx-2 md:mx-4 rounded-xl shadow-lg overflow-hidden">
                    <img className="" src={Framework2} alt="Wireframe"/>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='fadeInUp' delay={300} className="mx-2 md:mx-4 rounded-xl shadow-lg overflow-hidden">
                    <img className="" src={Framework3} alt="Wireframe"/>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn='fadeInUp' delay={500} className="hidden md:block mx-2 md:mx-4 rounded-xl shadow-lg overflow-hidden">
                    <img className="" src={Framework6} alt="Wireframe"/>
                  </ScrollAnimation>
              </div>
            </a>
            <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-12 mb-16 md:mb-20">
              <div className="w-full md:w-2/5 flex flex-col pr-8">
                <h3 className="font-semibold text-xl leading-tight">Facebook Pages Mobile Redesign
                </h3>
                <h4 className="text-gray-600 text-xs my-2 uppercase"><strong>2018</strong> | UI | UX | Product Thinking</h4>
              </div>
              <div className="w-full md:w-3/5 flex flex-col text-gray-900">
                <p>Facebook Pages help 90 million small businesses  engage with their customers and communities.
                  This consumer mobile redesign enabled Pages to be the best presence for a business,
                  and helped people connect, communicate and transact with business owners.</p>
                <Link className="mt-3 text-sm" to="/facebook"><span className="hover:line-through pb-2">Read More →</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mb-8 px-8">
          <div>
            {/* <div class="bg-fixed w-full h-64 anime-floatUp mb-8" style={{backgroundImage: "url("+Gusto+")"}}></div> */}
            <ScrollAnimation className="abstract overflow-hidden" animateIn='fadeIn' animateOut="fadeOut">
              <a href="/gusto">
                <img className="w-full" src={Gusto} alt="Gusto Health Benefits"/>
              </a>
            </ScrollAnimation>
            <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-12 mb-16 md:mb-20">
              <div className="w-full md:w-2/5 flex flex-col pr-8">
                <h3 className="font-semibold text-xl leading-tight">Gusto Benefits Renewal Flow
                </h3>
                <h4 className="text-gray-600 text-xs my-2 uppercase"><strong>2016</strong> | UI | UX | Research | Front-end</h4>
              </div>
              <div className="w-full md:w-3/5 flex flex-col text-gray-900">
                <p>Gusto helps small businesses take care of payroll, HR, and benefits.
                  This project enabled business owners to renew benefits they offer to their employees
                    for the upcoming year.</p>
                <Link className="mt-3 text-sm" to="/gusto"><span className="hover:line-through pb-2">Read More →</span></Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-3/5 flex flex-col mb-8 px-8">
            <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
              <a href="/gusto"><img className="border" src={Gusto} alt="Gusto Health Benefits"/></a>
            </ScrollAnimation>
            <div className="flex flex-col md:flex-row justify-between mt-10 mb-16 pr-8">
              <div className="md:w-2/5 flex flex-col pr-8">
                <h3 className="font-semibold text-xl leading-tight">Gusto Benefits Renewal Flow
                </h3>
                <h4 className="text-gray-600 text-xs my-2 uppercase">UI | UX | Research | Front-end</h4>
              </div>
              <div className="md:w-3/5 flex flex-col text-gray-800">
                <p>Gusto helps small businesses take care of payroll, HR, and benefits.
                  This 2016 project enabled business owners to renew benefits they offer to their employees
                    for the upcoming year.</p>
                <Link className="mt-3 text-sm" to="/gusto"><span className="hover:line-through pb-2">Read More →</span></Link>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 flex flex-col mb-8 px-8">
            <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
              <a href="/quantcast">
                <img src={Quantcast} alt=""/>
              </a>
            </ScrollAnimation>
            <h3 className="mt-10 font-semibold text-xl leading-tight">Quantcast Measure Redesign
            </h3>
            <h4 className="text-gray-600 text-xs my-2 uppercase">UI | UX | Front-end</h4>
            <div className="flex flex-col text-gray-800">
              <p>Quantcast's Measure product helped people analyze their website/mobile app audience.
              As the design lead for Quantcast Measure, I led the successful launch of Quantcast's 2015 Measure profile
        redesign effort.</p>
              <Link className="mt-3 text-sm" to="/gusto"><span className="hover:line-through pb-2">Read More →</span></Link>
            </div>
          </div>
        </div> */}
    </section>
  );
}

// function Process() {
//   return (
//     <section className="max-w-6xl mx-auto py-4 mb-32">
//       <h2 className="text-3xl font-bold p-8 mb-8">My Process</h2>
//       <div className="w-full flex flex-col md:flex-row">
//         <div className="flex-1 px-8">
//           <h3 className="text-xl font-semibold mb-2">Define</h3>
//           <p className="text-gray-800">Partner closely with team on defining project scope and timeline.</p>
//         </div>
//         <div className="flex-1 px-8">
//           <h3 className="text-xl font-semibold mb-2">Discover</h3>
//           <p className="text-gray-800">Quantcast's Measure product helped people analyze their website/mobile app audience.
//           As the design lead for Quantcast Measure, I led the successful launch of Quantcast's 2015 Measure profile
//     redesign effort.</p>
//         </div>
//         <div className="flex-1 px-8">
//           <h3 className="text-xl font-semibold mb-2">Design</h3>
//           <p className="text-gray-800">Quantcast's Measure product helped people analyze their website/mobile app audience.
//           As the design lead for Quantcast Measure, I led the successful launch of Quantcast's 2015 Measure profile
//     redesign effort.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

function Selected() {
  return (
    <section className="max-w-6xl mx-auto py-4 mb-32">
      <h2 className="text-3xl text-center font-bold p-8 mb-8">Selected Work</h2>
      <div className="w-full flex flex-col md:flex-row mb-4">
        <div className="md:w-3/5 flex flex-col mb-8 px-8">
        <div className="flex items-start dots bg-red-100 p-12 md:px-24 overflow-hidden">
          {/* <ScrollAnimation animateIn='fadeInUp' delay={200} className="mx-4 mt-4 rounded-lg shadow-lg overflow-hidden">
            <img className="" src={Redesign3} alt="Wireframe"/>
          </ScrollAnimation> */}
          <ScrollAnimation animateIn='fadeInDown' className="mx-4 rounded-xl shadow-2xl overflow-hidden">
            <img className="" src={Redesign1} alt="Wireframe"/>
          </ScrollAnimation>
          <ScrollAnimation animateIn='fadeInUp' className="mx-4 mt-6 rounded-xl shadow-xl overflow-hidden">
            <img className="" src={Redesign2} alt="Wireframe"/>
          </ScrollAnimation>
        </div>
          <div className="flex flex-col md:flex-row justify-between mt-10 mb-16 pr-8">
            <div className="md:w-2/5 flex flex-col pr-8">
              <h3 className="font-semibold text-xl leading-tight">Facebook Mobile Redesign
              </h3>
              <h4 className="text-gray-600 text-xs my-2 uppercase"><strong>2019</strong> | UI | UX</h4>
            </div>
            <div className="md:w-3/5 flex flex-col text-gray-800">
              <p>Facebook's 2019 redesign is the biggest redesign in years aimed to simplify and
                declutter the existing UI.</p>
              <Link className="mt-3 text-sm" to="/"><span className="hover:line-through pb-2">See Project →</span></Link>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 flex flex-col mb-8 px-8">
          <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
            <a href="/quantcast">
              <img src={Quantcast} alt=""/>
            </a>
          </ScrollAnimation>
          <h3 className="mt-10 font-semibold text-xl leading-tight">Quantcast Measure Redesign
          </h3>
          <h4 className="text-gray-600 text-xs my-2 uppercase"><strong>2015</strong> | UI | UX | Front-end</h4>
          <div className="flex flex-col text-gray-800">
            <p>Quantcast's Measure product helped people analyze their website/mobile app audience.
            As the design lead for Quantcast Measure, I led the successful launch of Quantcast's Measure profile
      redesign.</p>
            <Link className="mt-3 text-sm" to="/gusto"><span className="hover:line-through pb-2">See Project →</span></Link>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-2/5 flex flex-col mb-8 px-8">
          <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
            <img src={Riders} alt=""/>
          </ScrollAnimation>
          <h3 className="mt-10 font-semibold text-xl leading-tight">Riders for Health
          </h3>
          <h4 className="text-gray-600 text-xs my-2 uppercase"><strong>2013</strong> | UI | UX | Front-end</h4>
          <div className="flex flex-col text-gray-800">
            <p>My design solution for #ChimeHack Hackathon to help health workers deliver AIDS medications to remote villages in Lesotho, South Africa.</p>
            <Link className="mt-3 text-sm" to="/"><span className="hover:line-through pb-2">Coming Soon</span></Link>
          </div>
        </div>
        <div className="md:w-3/5 flex flex-col mb-8 px-8">
          <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
            <a href="/gusto"><img className="border" src={Droool} alt="Gusto Health Benefits"/></a>
          </ScrollAnimation>
          <div className="flex flex-col md:flex-row justify-between mt-10 mb-16 pr-8">
            <div className="md:w-2/5 flex flex-col pr-8">
              <h3 className="font-semibold text-xl leading-tight">Droool
              </h3>
              <h4 className="text-gray-600 text-xs my-2 uppercase">UI | UX | Research | Front-end</h4>
            </div>
            <div className="md:w-3/5 flex flex-col text-gray-800">
              <p>Gusto helps small businesses take care of payroll, HR, and benefits.
                This 2016 project enabled business owners to renew benefits they offer to their employees
                  for the upcoming year.</p>
              <Link className="mt-3 text-sm" to="/gusto"><span className="hover:line-through pb-2">Coming Soon</span></Link>
            </div>
          </div>
        </div>

      </div> */}
    </section>
  );
}
