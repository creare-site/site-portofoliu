import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1>{config.heading}</h1>
        <p>{config.subHeading} - <a href="https://websitemarket.ro?ref=portofoliu">Comanda Site</a> </p>
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Mai mult
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
