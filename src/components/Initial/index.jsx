import React from 'react';
import { Link } from 'react-router-dom';
import butts from '../../assets/butts.jpg';

const Pane = (props) => (<section className="pane" {...props} />);

export default () => (
  <main className="wrapper--initial">
    <Pane>
      <Link to="/materials">
        <h2>Materials</h2>
      </Link>
      <div className="pane__background" style={{ backgroundImage: `url(${butts})` }} />
    </Pane>
    <Pane>
      <Link to="/butts">
        <h2>Cigarette butts</h2>
      </Link>
      <div className="pane__background" style={{ backgroundImage: `url(${butts})` }} />
    </Pane>
  </main>
);