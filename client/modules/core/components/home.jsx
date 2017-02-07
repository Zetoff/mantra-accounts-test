import React from 'react';
import {Accounts} from 'meteor/std:accounts-ui';

const Home = () => (
  <div className='container'>
    <div className='row around-xs'>
      <div className='col-xs-12 col-sm-8 col-md-6 col-lg-4'>
      <h1>Accounts Material UI Demo</h1>
      <Accounts.ui.LoginForm/>
    </div>
    </div>
  </div>
);

export default Home;
