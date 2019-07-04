import React from 'react';

export default class Page404 extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <section className="flex flex-col mt-8 overflow-hidden">
          <div className="md:max-w-3xl mx-auto px-8">
            <h3 className="mt-24 md:mt-40 mb-4 text-center text-lg font-bold">Boo!</h3>
            <h1 className="mb-4 md:mx-8 text-center text-6xl font-bold leading-tight">I don't exist :(</h1>
            <a className="my-16 text-center block text-sm" href="/">Go Back Home →</a>
          </div>
        </section>
      </main>
    );
  }
}
