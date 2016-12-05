import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import {Accounts} from 'meteor/std:accounts-ui';


Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/login',
  // signUpPath: '/register',
  resetPasswordPath: '/password-reset',
  profilePath: '/profile',
  onSignedInHook:() => FlowRouter.go('/'),
  // onSignedInHook: () => {if (FlowRouter.current().route.name === 'login'){
  //   FlowRouter.go('/'); //TODO: change for ternary operator
  // }},
  // onSignedOutHook: () => FlowRouter.go('/'),
  minimumPasswordLength: 6
});
