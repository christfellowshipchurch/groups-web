import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Placeholder from '../../Placeholder';

const h3Style = css`
  h3,
  .H3 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 1.5rem;
    font-weight: 900;
    line-height: ${({ theme }) => theme.helpers.verticalRhythm(1.5, 1.15)};
    &.custom-placeholder {
      height: 1.5rem; /* Should match .h3font-size */
    }
  }
`;

const StyledH3 = styled.h3.attrs({
  className: 'ui-kit-typography-H3-StyledH3',
})`
  margin: ${({ padded, theme }) =>
    padded
      ? `${theme.helpers.verticalRhythm(
          1.125
        )} 0 ${theme.helpers.verticalRhythm(0.75)} 0`
      : 'inital'};
`;

const H3 = ({ children, isLoading, padded, ...props }) => (
  <Placeholder.Typography
    isLoading={isLoading}
    showLoadingAnimation
    typographicClassName={'H3'} // needs to match child components className
  >
    <StyledH3 padded={padded} {...props}>
      {children}
    </StyledH3>
  </Placeholder.Typography>
);

H3.defaultProps = {
  isLoading: false,
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
};

H3.displayName = 'ui-kit.typography.H3';

export { H3 as default, h3Style };
