import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Placeholder from '../../Placeholder';

const h4Style = css`
  h4,
  .H4 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 1rem;
    font-weight: 700;
    line-height: ${({ theme }) => theme.helpers.verticalRhythm(1)};
    &.custom-placeholder {
      height: 1rem; /* Should match .h4font-size */
    }
  }
`;

const StyledH4 = styled.h4.attrs({
  className: 'ui-kit-typography-H4-StyledH4',
})`
  margin: ${({ padded, theme }) =>
    padded
      ? `${theme.helpers.verticalRhythm(0.66)} 0 ${theme.helpers.verticalRhythm(
          0.5
        )} 0`
      : 'inital'};
`;

const H4 = ({ children, isLoading, padded, ...props }) => (
  <Placeholder.Typography
    isLoading={isLoading}
    showLoadingAnimation
    typographicClassName={'H4'} // needs to match child components className
  >
    <StyledH4 padded={padded} {...props}>
      {children}
    </StyledH4>
  </Placeholder.Typography>
);

H4.defaultProps = {
  isLoading: false,
};

H4.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
};

H4.displayName = 'ui-kit.typography.H4';

export { H4 as default, h4Style };
