import React from 'react';
import {Accounts} from 'meteor/std:accounts-ui';

const Home = () => (
  <div>
    <h1>Mantra</h1>
    <p>
      Welcome to Mantra 0.4.2.
    </p>
    <ul>
      <li>
        Read <a target="_blank" href="https://kadirahq.github.io/mantra/">spec</a>
      </li>
      <li>
        Learn <a target="_blank" href="https://github.com/sungwoncho/mantra-cli#commands">CLI</a>
      </li>
    </ul>
    <Accounts.ui.LoginForm/>
  </div>
);

export default Home;
