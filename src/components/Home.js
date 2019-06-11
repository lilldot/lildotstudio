import React from 'react';

function Home() {
  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
}
function Hero() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col md:justify-center px-4 py-8 md:p-8 leading-normal my-24">
      <h1 className="text-6xl leading-tight font-serif anime-fadeInUp">
        I design refreshingly easy experiences to help people live happier lives.
      </h1>
      <div className="w-full md:w-2/3 font-sans text-xl mt-8">
        <p>
            And I love learning new things.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="max-w-5xl mx-auto bg-white py-4 font-sans flex flex-wrap items-center justify-start">

    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
      <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg cursor-pointer anime-floatUp">
        <img className="w-full" src="https://stitches.hyperyolo.com/images/demo-bg.png" alt="Sunset in the mountains"/>
        <div className="p-6 flex flex-col justify-between ">
          <h3 className="font-medium font-serif text-grey-darkest mb-4 leading-normal">Facebook Pages
          </h3>
          <p className="inline-flex items-center">
            <span className="text-grey-dark text-sm">2017</span>
          </p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
      <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg cursor-pointer anime-floatUp">
        <img className="w-full" src="https://stitches.hyperyolo.com/images/demo-bg.png" alt="Sunset in the mountains"/>
        <div className="p-6 flex flex-col justify-between ">
          <h3 className="font-medium font-serif text-grey-darkest mb-4 leading-normal">Gusto Benefits
          </h3>
          <p className="inline-flex items-center">
            <span className="text-grey-dark text-sm">2016</span>
          </p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
      <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg cursor-pointer anime-floatUp">
        <img className="w-full" src="https://stitches.hyperyolo.com/images/demo-bg.png" alt="Sunset in the mountains"/>
        <div className="p-6 flex flex-col justify-between ">
          <h3 className="font-medium font-serif text-grey-darkest mb-4 leading-normal">Quantcast Redesign
          </h3>
          <p className="inline-flex items-center">
            <span className="text-grey-dark text-sm">2015</span>
          </p>
        </div>
      </div>
    </div>

</section>
  );
}

export default Home;
