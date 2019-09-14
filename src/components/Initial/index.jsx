import React from 'react';
import { Link } from 'react-router-dom';
import butts from '../../assets/butts2.jpg';
import mats from '../../assets/mats.jpg';

const Pane = (props) => (<section className="pane" {...props} />);

export default () => (
  <main className="wrapper--initial">
    <Pane>
      <Link className="pane__link" to="/materials">
        <h2>Materials</h2>
      </Link>
      <div
        className="pane__background pane__background--tint pane__background--mats"
        style={{ backgroundImage: `url(${mats})` }}
      />
    </Pane>
    <Pane>
      <Link className="pane__link" to="/butts">
        <h2>Cigarette butts</h2>
      </Link>
      <div
        className="pane__background pane__background--tint pane__background--butts"
        style={{ backgroundImage: `url(${butts})` }}
      />
    </Pane>
  </main>
);