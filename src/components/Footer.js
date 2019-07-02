import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="py-16 px-8 text-center flex flex-col text-sm text-gray-500 bg-gray-900 items-center">
        <p>Designed and built by Katherine Reyes. ©2019 All rights reserved.</p>
        <ul className="flex text-gray-300 mt-4">
          <li className="transition hover:text-purple-200 floatUp">
            <a href="https://www.instagram.com/lildotstudio/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </li>
          <li className="transition hover:text-orange-200 floatUp">
            <a href="https://www.instagram.com/roamalong/" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
          </li>
          <li className="transition hover:text-pink-200 floatUp">
            <a href="https://dribbble.com/klreyes" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FontAwesomeIcon icon={['fab', 'dribbble']} />
            </a>
          </li>
          <li className="transition hover:text-blue-200 floatUp">
            <a href="https://medium.com/@lilldot" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FontAwesomeIcon icon={['fab', 'medium']} />
            </a>
          </li>
          {/* <li className="transition hover:text-white floatUp">
            <a href="mailto:klong128@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-2">
              <FontAwesomeIcon icon={['far', 'envelope']} />
            </a>
          </li> */}
        </ul>
      </footer>
    );
  }
}
