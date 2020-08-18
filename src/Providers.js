import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { AuthProvider } from './auth';
import { IconProvider } from './ui-kit/Icon';
import { defaultTheme, GlobalStyles } from './ui-kit/theme';

const Providers = ({ children, iconInput }) => (
  <AuthProvider>
    <ThemeProvider theme={defaultTheme}>
      <IconProvider iconInput={iconInput}>
        <GlobalStyles />
        {children}
      </IconProvider>
    </ThemeProvider>
  </AuthProvider>
);

Providers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  iconInput: PropTypes.objectOf(PropTypes.func),
};

export default Providers;
