import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Line } from '../../Placeholder';

const verticalRhythm = css`
  ${({ padded, theme }) =>
    padded
      ? `${theme.helpers.verticalRhythm(
          0.5775
        )} 0 ${theme.helpers.verticalRhythm(0.4375)} 0`
      : 'initial'};
`;

const StyledH5 = styled.h5.attrs({
  className: 'ui-kit-typography-H5-StyledH5',
})`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(0.875)};
  margin: ${verticalRhythm};
`;

const Placeholder = styled(Line).attrs({
  className: 'ui-kit-H5-Placeholder',
})`
  height: 0.875rem; /* Should match H5 font-size */
  margin: ${({ padded, theme }) =>
    // if padded...
    padded
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `calc(${theme.helpers.verticalRhythm(
          0.875
        )} - 0.875rem) 0`}; /* line-height - font-size = space between lines */
`;

const H5 = ({ children, isLoading, padded, ...props }) => (
  <Placeholder isLoading={isLoading} padded={padded} showLoadingAnimation>
    <StyledH5 padded={padded} {...props}>
      {children}
    </StyledH5>
  </Placeholder>
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

export default H5;
