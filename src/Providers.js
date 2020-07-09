import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { defaultTheme } from './ui-kit/theme';

const Providers = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

Providers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Providers;
