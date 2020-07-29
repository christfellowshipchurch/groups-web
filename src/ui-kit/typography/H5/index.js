import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Placeholder from '../../Placeholder';

const h5Style = css`
  h5,
  .H5 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: ${({ theme }) => theme.helpers.verticalRhythm(0.875)};
    &.custom-placeholder {
      height: 0.875rem; /* Should match .h5font-size */
    }
  }
`;

const StyledH5 = styled.h5.attrs({
  className: 'ui-kit-typography-H5-StyledH5',
})`
  margin: ${({ padded, theme }) =>
    padded
      ? `${theme.helpers.verticalRhythm(
          0.5775
        )} 0 ${theme.helpers.verticalRhythm(0.4375)} 0`
      : 'inital'};
`;

const H5 = ({ children, isLoading, padded, ...props }) => (
  <Placeholder.Typography
    isLoading={isLoading}
    showLoadingAnimation
    typographicClassName={'H5'} // needs to match child components className
  >
    <StyledH5 padded={padded} {...props}>
      {children}
    </StyledH5>
  </Placeholder.Typography>
);

H5.defaultProps = {
  isLoading: false,
};

H5.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
};

H5.displayName = 'ui-kit.typography.H5';

export { H5 as default, h5Style };
