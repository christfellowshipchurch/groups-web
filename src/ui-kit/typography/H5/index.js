import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { withOverrides } from '../../theme';
import { Line } from '../../Placeholder';
import { getIsLoading } from '../../isLoading';

const verticalRhythm = css`
  ${({ withMargins, theme }) =>
    withMargins
      ? `${theme.helpers.verticalRhythm(
          0.5775
        )} 0 ${theme.helpers.verticalRhythm(0.4375)} 0`
      : 'initial'};
`;

const StyledH5 = styled.h5.attrs(withOverrides('uiKit.typography.H5.StyledH5'))`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(0.875)};
  margin: ${verticalRhythm};

  /* Styles passed via the style prop and/or overrides */
  ${({ $style }) => $style}
`;

const Placeholder = styled(Line).attrs(
  withOverrides('uiKit.typography.H5.Placeholder')
)`
  height: 0.875rem; /* Should match H5 font-size */
  margin: ${({ withMargins, theme }) =>
    // if withMargins...
    withMargins
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `calc(${theme.helpers.verticalRhythm(
          0.875
        )} - 0.875rem) 0`}; /* line-height - font-size = space between lines */

  /* Styles passed via overrides */
  ${({ $style }) => $style}
`;

// We pass `style` as a prop to `StyledH5` so that custom styles are handled by styled components and not react (inline style)
const H5 = getIsLoading(
  ({ children, isLoading, withMargins, style, ...props }) => (
    <Placeholder
      isLoading={isLoading}
      withMargins={withMargins}
      showLoadingAnimation
    >
      <StyledH5 withMargins={withMargins} $styles={style} {...props}>
        {children}
      </StyledH5>
    </Placeholder>
  )
);

H5.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  withMargins: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

H5.displayName = 'ui-kit.typography.H5';

export default styled(H5).attrs(withOverrides('uiKit.typography.H5'))``;
