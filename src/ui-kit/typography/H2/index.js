import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Placeholder from '../../Placeholder';

const h2Style = css`
  h2,
  .H2 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 2.25rem;
    font-weight: 900;
    line-height: ${({ theme }) => theme.helpers.verticalRhythm(2.25, 1.15)};
    &.custom-placeholder {
      height: 2.25rem; /* Should match .h2font-size */
    }
  }
`;

const StyledH2 = styled.h2.attrs({
  className: 'ui-kit-typography-H2-StyledH2',
})`
  margin: ${({ padded, theme }) =>
    padded
      ? `${theme.helpers.verticalRhythm(1)} 0 ${theme.helpers.verticalRhythm(
          0.834
        )} 0`
      : 'inital'};
`;

const H2 = ({ children, isLoading, padded, ...props }) => (
  <Placeholder.Typography
    isLoading={isLoading}
    showLoadingAnimation
    typographicClassName={'H2'} // needs to match child components className
  >
    <StyledH2 padded={padded} {...props}>
      {children}
    </StyledH2>
  </Placeholder.Typography>
);

H2.defaultProps = {
  isLoading: false,
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
};

H2.displayName = 'ui-kit.typography.H2';

export { H2 as default, h2Style };
