import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { withOverrides } from '../../theme';
import { getIsLoading } from '../../isLoading';
import { Line } from '../../Placeholder';

const verticalRhythm = css`
  ${({ withMargins, theme }) =>
    withMargins
      ? `${theme.helpers.verticalRhythm(1)} 0 ${theme.helpers.verticalRhythm(
          0.834
        )}`
      : 'initial'};
`;

const StyledH2 = styled.h2.attrs(({ theme, ...props }) => ({
  ...withOverrides(theme?.overrides['uiKit.typography.H2.StyledH2'], props),
}))`
  font-size: 2.25rem;
  font-weight: 900;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(2.25, 1.15)};
  margin: ${verticalRhythm};

  /* Styles passed via the style prop */
  ${({ $style }) => $style}
`;

const Placeholder = styled(Line).attrs({
  className: 'ui-kit-H1-Placeholder',
})`
  height: 2.25rem; /* Should match .h2font-size */
  margin: ${({ withMargins, theme }) =>
    // if withMargins...
    withMargins
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `calc(${theme.helpers.verticalRhythm(
          2.25,
          1.15
        )} - 2.25rem) 0`}; /* line-height - font-size = space between lines */
`;

// We pass `style` as a prop to `StyledH2` so that custom styles are handled by styled components and not react (inline style)
const H2 = getIsLoading(
  ({ children, isLoading, withMargins, style, ...props }) => (
    <Placeholder
      isLoading={isLoading}
      withMargins={withMargins}
      showLoadingAnimation
    >
      <StyledH2 withMargins={withMargins} $style={style} {...props}>
        {children}
      </StyledH2>
    </Placeholder>
  )
);

H2.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  withMargins: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

H2.displayName = 'ui-kit.typography.H2';

export default H2;
