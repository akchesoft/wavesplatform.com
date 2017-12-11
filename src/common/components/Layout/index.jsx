import React from 'react';

import Wrapper from '../Wrapper';
import Navigation from '../Navigation';
import Footer from '../Footer';
// import SnackbarStressTest from 'src/common/components/SnackbarStressTest';

import { DESKTOP_LINKS, MOBILE_LINKS } from './links';

import injectSheet from 'react-jss';

const styles = theme => ({
  root: {
    overflowX: 'hidden',
  },
  navigationWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 300
  },
});

const Layout = ({
  children,
  classes,
  activeLink,
  hideFooter,
  // hideSnackbar,
}) => (
  <div>
    <div className={classes.navigationWrapper}>
      <Navigation desktopLinks={DESKTOP_LINKS} mobileLinks={MOBILE_LINKS} activeLink={activeLink} />
    </div>
    {children}
    <Wrapper>
      {!hideFooter && <Footer links={MOBILE_LINKS} />}
      {/* {!hideSnackbar && <SnackbarStressTest />} */}
    </Wrapper>
  </div>
);

export default injectSheet(styles)(Layout);
