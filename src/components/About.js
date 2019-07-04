import React from 'react';
import Me from '../img/kreyes.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from "react-router-dom";

export default class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main>
        <Intro />
        <Experience />
      </main>
    );
  }
}

function Intro() {
  return (
    <section className="mt-24 md:mt-32">
      <div className="md:max-w-5xl mx-auto mt-16 px-8 flex flex-col items-center">
        <div>
          {/* <h2 className="text-3xl font-bold my-8">About Me</h2> */}
          <ScrollAnimation animateIn='fadeIn'>
          <h1 className="text-2xl md:text-3xl">I'm a <b>Product Designer</b> with a decade of industry experience <b>crafting simple and delightful product experiences</b>.
            I've designed and shipped over <b>30+ mobile and web products</b> impacting people around the world.
            I always <b>advocate for user needs</b> and strive to create the <b>easiest and most intuitive UX</b> to <b>help people</b> get things done.
            I <b>sweat the details</b> in UI and I'm <b>thoughtful about what I create</b> as well as what I leave out.</h1>

          {/* <div className="flex mt-8 items-center">
            <ScrollAnimation animateIn='fadeIn' className="w-32 h-32 rounded-full overflow-hidden">
              <img className="" src={Me} alt="Katherine and her dog"/>
            </ScrollAnimation>
            <div className="ml-8 flex flex-col items-start"> */}

              <h2 className="mt-8 leading-relaxed md:max-w-2xl">Beyond design, I'm an artist, dancer, flutist and avid traveler. I love learning and making things.
                I draw inspiration from a variety of creative media and I'm always interested in new exciting adventures.
                Here are some of my <a
                  href="https://www.instagram.com/lildotstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold border-b border-dotted border-gray-800">watercolor paintings</a> and <a
                  href="https://www.instagram.com/roamalong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold border-b border-dotted border-gray-800">travel photography</a>.
                  Chances are you probably have seen my photos in Apple products.
              </h2>
            </ScrollAnimation>
            {/* </div>
          </div> */}
          {/* <p>Above all else show the data. - Edward Tufte</p> */}
          {/* <h2 className="text-3xl font-bold my-8">Work History</h2>
          <p>
              <strong>Facebook</strong> &mdash; <i>Senior Product Designer</i>
    					<br />I design, code, and do everything in between to create a delightful product that our users love!
          </p>
          <p>
              <strong>Gusto</strong> &mdash; <i>Senior Product Designer</i>
    					<br />I design, code, and do everything in between to create a delightful product that our users love!
          </p>
          <p>
              <strong>Quantcast</strong> &mdash; <i>Senior User Experience Designer</i>
              <br />I solved data visualization problems, from user research, information architecture,
              wireframes, interactive prototypes, to visual design, style guide and front-end development.
          </p>
          <p>
              <strong>Apple</strong> &mdash; <i>User Experience Designer</i>
              <br />I designed and prototyped enterprise software for iPhone, iPad and desktop.
          </p>
          <p>
              <strong>Apple</strong> &mdash; <i>Front-end UI Engineer</i>
              <br />I made sure the Apple Online Store was fast, interactive, and pixel-perfect.
          </p>
          <p><strong>Cornell University</strong> <i>Web Developer/Designer</i> &mdash; 3 years
              <br />I designed and developed websites for a variety of school organizations.
          </p>
          <h2 className="text-3xl font-bold my-8">Expertise</h2>
          <div className="flex text-sm">
            <ul>
              <li>Interaction / UX Design</li>
              <li>Visual / UI Design</li>
              <li>Information Architecture</li>
              <li>Product Strategy</li>
              <li>Concepting</li>
              <li>Wireframes</li>
              <li>User Research</li>
              <li>Data Visualization</li>
            </ul>
            <ul className="ml-16">
              <li>Prototyping (Framer, Origami, Invision, Figma, Keynote)</li>
              <li>Front-end Development (HTML, CSS, Javascript/React)</li>
              <li>Spec Docs</li>
              <li>Photography</li>
              <li>Watercolor</li>
              <li>Hand Lettering</li>
              <li>Ballet</li>
              <li>Flute</li>
            </ul>
          </div> */}
        </div>
        <ScrollAnimation animateIn='fadeIn' className="border-4 border-white rounded-full overflow-hidden mx-auto relative me">
          <img className="" src={Me} alt="Katherine and her dog"/>
        </ScrollAnimation>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="bg-gray-900 text-white pt-16">
      <div className="md:max-w-2xl mx-auto mt-16 px-8">
        <div className="flex flex-col items-center mb-24">
          {/* <p className="mb-4">Let's chat about how I could help you.</p> */}
          <Link className="border py-2 px-4 rounded-lg border-gray-100 hover:bg-gray-100 hover:text-gray-900" to="/contact">Hire Me</Link>
        </div>
        <div>
          <h2 className="text-3xl font-bold my-8">Work History</h2>
          <ul className="leading-relaxed">
            <li>
                <strong>Facebook</strong> &mdash; <i>Product Designer &mdash; Design Lead</i>
            </li>
            <li>
                <strong>Gusto</strong> &mdash; <i>Product Designer &mdash; Design Lead</i>
      					{/* <br />I design, code, and do everything in between to create a delightful product that our users love! */}
            </li>
            <li>
                <strong>Quantcast</strong> &mdash; <i>Senior User Experience Designer &mdash; Design Lead</i>
            </li>
            <li>
                <strong>Apple</strong> &mdash; <i>User Experience Designer</i>
            </li>
            <li>
                <strong>Apple</strong> &mdash; <i>Front-end UI Engineer</i>
            </li>
            <li className="inline-block pt-4 text-sm border-b border-dotted border-gray-100"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/klreyes/">See Full Resume on LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold mt-24 mb-8">Expertise</h2>
          <div className="flex flex-col md:flex-row text-sm leading-loose">
            <ul>
              <li>Interaction / UX Design</li>
              <li>Visual / UI Design</li>
              <li>Information Architecture</li>
              <li>Product Strategy</li>
              <li>Concepting</li>
              <li>Wireframes</li>
              <li>User Research</li>
              <li>Data Visualization</li>
            </ul>
            <ul className="md:ml-16">
              <li>Prototyping (Framer, Origami, Invision, Figma, Keynote)</li>
              <li>Front-end Development (HTML, CSS, Javascript/React)</li>
              <li>Spec Docs</li>
              <li>Photography</li>
              <li>Watercolor</li>
              <li>Hand Lettering</li>
              <li>Ballet</li>
              <li>Flute</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center pt-32 pb-24 border-b">
            <ScrollAnimation animateIn='swing' className="text-3xl mb-4"><span role="img" aria-label="hello">👋</span></ScrollAnimation>
            <p className="mb-4 text-center max-w-xs mx-auto">I'm currently looking for new opportunities. Let's chat about how I could help you.</p>
            <Link className="mt-2 border py-2 px-4 rounded-lg border-gray-100 hover:bg-gray-100 hover:text-gray-900" to="/contact">Hire Me</Link>
        </div>
      </div>
    </section>
  );
}
