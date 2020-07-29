import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Placeholder from '../../Placeholder';

const h1Style = css`
  h1,
  .h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 2.6875rem;
    font-weight: 900;
    line-height: ${({ theme }) => theme.helpers.verticalRhythm(2.6875, 1.15)};
    &.ui-kit-Placeholder-TypographyLine {
      background: 'blue';
      height: 2.6875rem;
    }
  }
`;

const StyledH1 = styled.h1`
  margin: ${({ padded, theme }) =>
    padded ? `${theme.helpers.verticalRhythm(2.015625)} 0` : 'inital'};
`;

const H1 = ({ children, isLoading, padded }) => (
  <Placeholder.Typography isLoading={isLoading} style={h1Style}>
    <StyledH1 padded={padded}>{children}</StyledH1>
  </Placeholder.Typography>
);

H1.defaultProps = {
  isLoading: false,
};

H1.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
};

H1.displayName = 'ui-kit.typography.H1';

export { H1 as default, h1Style };
