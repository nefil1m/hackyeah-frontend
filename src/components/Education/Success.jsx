import React from 'react';
import { auth } from '../../constants';

const Success = () => (
  <section>
    <h1>Oh you're great sweetheart! We love you!</h1>
    <a href={auth.trigger}>Log in</a>
  </section>
);

export {
  Success,
};