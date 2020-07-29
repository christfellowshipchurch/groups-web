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
    &.custom-placeholder {
      height: 2.6875rem; /* Should match .h1 font-size */
    }
  }
`;

const StyledH1 = styled.h1.attrs({
  className: 'ui-kit-typography-H1-StyledH1',
})`
  margin: ${({ padded, theme }) =>
    padded ? `${theme.helpers.verticalRhythm(2.015625)} 0` : 'inital'};
`;

const H1 = ({ children, isLoading, padded, ...props }) => (
  <Placeholder.Typography
    isLoading={isLoading}
    showLoadingAnimation
    typographicClassName={'h1'} // needs to match child components className
  >
    <StyledH1 padded={padded} {...props}>
      {children}
    </StyledH1>
  </Placeholder.Typography>
);

H1.defaultProps = {
  isLoading: false,
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
};

H1.displayName = 'ui-kit.typography.H1';

export { H1 as default, h1Style };
