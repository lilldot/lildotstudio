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
    <section className="max-w-6xl mx-auto flex flex-col md:justify-center px-4 py-8 md:p-8 leading-normal mb-24 mt-32">
      <h1 className="text-6xl leading-tight font-serif anime-fadeInUp">
        I design refreshingly easy experiences to help people live happier lives.
      </h1>
      <div className="w-full md:w-2/3 font-sans text-xl mt-12">
        <p>
            Since 2010, I've designed and occasionally built many mobile and web apps
            for Apple, Facebook, Gusto and other startups. When I'm not designing, I'm
            usually traveling, creating art or learning something new.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-4">
    <h2 className="mb-4 text-l tracking-wide font-semibold uppercase px-8">A Few Projects I've Worked On</h2>
    <div className="flex flex-wrap items-center justify-start">
    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
      <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg cursor-pointer anime-floatUp">
        <img className="w-full" src="https://stitches.hyperyolo.com/images/demo-bg.png" alt="Sunset in the mountains"/>
        <div className="p-6 flex flex-col justify-between ">
          <h3 className="font-medium font-serif text-grey-darkest mb-4 leading-normal">Facebook Pages Consumer Mobile Redesign
          </h3>
          <p className="inline-flex items-center">
            <span className="text-grey-dark text-sm">View Facebook Pages</span>
          </p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
      <div className="overflow-hidden bg-white rounded-lg shadow hover:shadow-lg cursor-pointer anime-floatUp">
        <img className="w-full" src="https://stitches.hyperyolo.com/images/demo-bg.png" alt="Sunset in the mountains"/>
        <div className="p-6 flex flex-col justify-between ">
          <h3 className="font-medium font-serif text-grey-darkest mb-4 leading-normal">Gusto Benefits Renewal
          </h3>
          <p className="inline-flex items-center">
            <span className="text-grey-dark text-sm">View Gusto Benefits</span>
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
            <span className="text-grey-dark text-sm">View Quantcast Redesign</span>
          </p>
        </div>
      </div>
    </div>
</div>
</section>
  );
}

export default Home;
