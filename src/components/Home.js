import React from 'react';
import Quantcast from '../img/qc/qc-cover.png';
import Gusto from '../img/gusto/gusto-health-renewal.png';
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Home extends React.Component {
 render() {
    return (
      <main>
        <Hero />
        <CaseStudy />
        <Process />
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
            Since 2008, I've designed and occasionally built many mobile and web apps
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
      <h2 className="text-3xl font-bold p-8 mb-8">Case Study</h2>
        <div className="w-full flex flex-col mb-8 px-8">
          <div>
            {/* <div class="bg-fixed w-full h-64 anime-floatUp mb-8" style={{backgroundImage: "url("+Gusto+")"}}></div> */}
            <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
              <img className="w-full h-64" src={Quantcast} alt="Facebook Pages Mobile Redesign"/>
            </ScrollAnimation>
            <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-12 mb-16 md:mb-20">
              <div className="w-full md:w-2/5 flex flex-col pr-8">
                <h3 className="font-semibold text-xl leading-tight">Facebook Pages Mobile Redesign
                </h3>
                <h4 className="text-gray-600 text-xs my-2 uppercase">UI | UX | Product Thinking</h4>
              </div>
              <div className="w-full md:w-3/5 flex flex-col text-gray-900">
                <p>Facebook Pages help businesses  engage with their customers and communities.
                  This 2018 consumer mobile redesign made Pages the best presence for a business,
                  and helped people connect, communicate and transact with business owners.</p>
                <Link className="mt-3 text-sm" to="/gusto"><span className="underline pb-2">Read More →</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="md:w-3/5 flex flex-col mb-8 px-8">
            <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
              <img className="border" src={Gusto} alt="Gusto Health Benefits"/>
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
                <Link className="mt-3 text-sm" to="/gusto"><span className="underline pb-2">Read More →</span></Link>
              </div>
            </div>
          </div>
          <div className="md:w-2/5 flex flex-col mb-8 px-8">
            <ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
              <img src={Quantcast} alt=""/>
            </ScrollAnimation>
            <h3 className="mt-10 font-semibold text-xl leading-tight">Quantcast Measure Redesign
            </h3>
            <h4 className="text-gray-600 text-xs my-2 uppercase">UI | UX | Front-end</h4>
            <div className="flex flex-col text-gray-800">
              <p>Quantcast's Measure product helped people analyze their website/mobile app audience.
              As the design lead for Quantcast Measure, I led the successful launch of Quantcast's 2015 Measure profile
        redesign effort.</p>
              <Link className="mt-3 text-sm" to="/gusto"><span className="underline pb-2">Read More →</span></Link>
            </div>
          </div>
        </div>
    </section>
  );
}

function Process() {
  return (
    <section className="max-w-6xl mx-auto py-4 mb-32">
      <h2 className="text-3xl font-bold p-8 mb-8">My Process</h2>
      <div className="w-full flex flex-col md:flex-row">
        <div className="flex-1 px-8">
          <h3 className="text-xl font-semibold mb-2">Define</h3>
          <p className="text-gray-800">Partner closely with team on defining project scope and timeline.</p>
        </div>
        <div className="flex-1 px-8">
          <h3 className="text-xl font-semibold mb-2">Discover</h3>
          <p className="text-gray-800">Quantcast's Measure product helped people analyze their website/mobile app audience.
          As the design lead for Quantcast Measure, I led the successful launch of Quantcast's 2015 Measure profile
    redesign effort.</p>
        </div>
        <div className="flex-1 px-8">
          <h3 className="text-xl font-semibold mb-2">Design</h3>
          <p className="text-gray-800">Quantcast's Measure product helped people analyze their website/mobile app audience.
          As the design lead for Quantcast Measure, I led the successful launch of Quantcast's 2015 Measure profile
    redesign effort.</p>
        </div>
      </div>
    </section>
  );
}
