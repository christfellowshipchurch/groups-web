import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { getIsLoading } from '../../isLoading';
import { Line } from '../../Placeholder';

const verticalRhythm = css`
  ${({ withMargins, theme }) =>
    withMargins ? `${theme.helpers.verticalRhythm(2.015625)} 0` : 'initial'};
`;

const StyledH1 = styled.h1.attrs({
  className: 'ui-kit-H1-StyledH1',
})`
  font-size: 2.6875rem;
  font-weight: 900;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(2.6875, 1.15)};
  margin: ${verticalRhythm};

  /* Styles passed via the style prop */
  ${({ customStyles }) => customStyles}
`;

const Placeholder = styled(Line).attrs({
  className: 'ui-kit-H1-Placeholder',
})`
  height: 2.6875rem; /* Should match .h1 font-size */
  margin: ${({ withMargins, theme }) =>
    // if withMargins...
    withMargins
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `calc(${theme.helpers.verticalRhythm(
          2.6875,
          1.15
        )} - 2.6875rem) 0`}; /* line-height - font-size = space between lines */
`;

// We pass `style` as a prop to `StyledH2` so that custom styles are handled by styled components and not react (inline style)
const H1 = getIsLoading(
  ({ children, isLoading, withMargins, style, ...props }) => (
    <Placeholder
      isLoading={isLoading}
      withMargins={withMargins}
      showLoadingAnimation
    >
      <StyledH1 withMargins={withMargins} customStyles={style} {...props}>
        {children}
      </StyledH1>
    </Placeholder>
  )
);

H1.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  withMargins: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

H1.displayName = 'ui-kit.typography.H1';

export default H1;
