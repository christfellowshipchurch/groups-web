import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Placeholder from '../../Placeholder';

const h6Style = css`
  h6,
  .H6 {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 0.75rem;
    font-weight: 500;
    line-height: ${({ theme }) => theme.helpers.verticalRhythm(0.75)};
    &.custom-placeholder {
      height: 0.75rem; /* Should match .h6font-size */
    }
  }
`;

const StyledH6 = styled.h6.attrs({
  className: 'ui-kit-typography-H6-StyledH6',
})`
  margin: ${({ padded, theme }) =>
    padded ? `0 0 ${theme.helpers.verticalRhythm(0.375)} 0` : 'initial'};
`;

const H6 = ({ children, isLoading, padded, ...props }) => (
  <Placeholder.Typography
    isLoading={isLoading}
    showLoadingAnimation
    typographicClassName={'H6'} // needs to match child components className
  >
    <StyledH6 padded={padded} {...props}>
      {children}
    </StyledH6>
  </Placeholder.Typography>
);

H6.defaultProps = {
  isLoading: false,
};

H6.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
};

H6.displayName = 'ui-kit.typography.H6';

export { H6 as default, h6Style };
