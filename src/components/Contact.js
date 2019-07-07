import React from 'react';

export default class Contact extends React.Component {
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
        <h3 className="mt-24 md:mt-40 mb-2 text-center text-lg font-bold">Boo!</h3>
        <h1 className="mb-4 md:mx-8 text-center text-6xl font-bold leading-tight">Coming soon...</h1>
        <h3 className="my-16 text-center text-sm ">Katherine's working on it!</h3>

      </div>
    </section>
  );
}
