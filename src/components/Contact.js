import React from 'react';

export default class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Contact</h1>
      </div>
    );
  }
}
