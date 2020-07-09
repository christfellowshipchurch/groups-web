import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from './theme';

const Providers = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Providers.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Providers;
