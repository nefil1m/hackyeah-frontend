import React from 'react';
import { auth } from '../../constants';
import success from '../../assets/success.jpg';

const Success = () => (
  <section className="success" style={{ backgroundImage: `url(${success})`}}>

    <h1>Oh you're great Sweetheart! We love you!</h1>
    <p className="lead mb-5">You've earned over 9000 buttpoints!</p>
    <a href={auth.trigger} className="btn btn-success btn-lg">Start the change!</a>
  </section>
);

export {
  Success,
};