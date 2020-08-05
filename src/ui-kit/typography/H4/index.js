import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { withOverrides } from '../../theme';
import { Line } from '../../Placeholder';
import { getIsLoading } from '../../isLoading';

const verticalRhythm = css`
  ${({ withMargins, theme }) =>
    withMargins
      ? `${theme.helpers.verticalRhythm(0.66)} 0 ${theme.helpers.verticalRhythm(
          0.5
        )} 0;`
      : 'initial'};
`;

const StyledH4 = styled.h4.attrs(withOverrides('uiKit.typography.H4.StyledH4'))`
  font-size: 1rem;
  font-weight: 700;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(1)};
  margin: ${verticalRhythm};

  /* Styles passed via the style prop and/or overrides */
  ${({ $style }) => $style}
`;

const Placeholder = styled(Line).attrs(
  withOverrides('uiKit.typography.H4.Placeholder')
)`
  height: 1rem; /* Should match H4 font-size */
  margin: ${({ withMargins, theme }) =>
    // if withMargins...
    withMargins
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `calc(${theme.helpers.verticalRhythm(
          1
        )} - 1rem) 0`}; /* line-height - font-size = space between lines */

  /* Styles passed via overrides */
  ${({ $style }) => $style}
`;

// We pass `style` as a prop to `StyledH4` so that custom styles are handled by styled components and not react (inline style)
const H4 = getIsLoading(
  ({ children, isLoading, withMargins, style, ...props }) => (
    <Placeholder
      isLoading={isLoading}
      withMargins={withMargins}
      showLoadingAnimation
    >
      <StyledH4 withMargins={withMargins} $styles={style} {...props}>
        {children}
      </StyledH4>
    </Placeholder>
  )
);

H4.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  withMargins: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

H4.displayName = 'ui-kit.typography.H4';

export default styled(H4).attrs(withOverrides('uiKit.typography.H4'))``;
