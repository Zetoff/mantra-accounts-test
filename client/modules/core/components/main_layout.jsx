import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const Layout = ({content = () => null }) => (
  <MuiThemeProvider>
    <div>
      {content()}
    </div>
  </MuiThemeProvider>
);

export default Layout;
