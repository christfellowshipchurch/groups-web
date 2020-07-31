import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Line } from '../../Placeholder';

const verticalRhythm = css`
  ${({ padded, theme }) =>
    padded ? `${theme.helpers.verticalRhythm(2.015625)} 0` : 'initial'};
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
  margin: ${({ padded, theme }) =>
    // if padded...
    padded
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `calc(${theme.helpers.verticalRhythm(
          2.6875,
          1.15
        )} - 2.6875rem) 0`}; /* line-height - font-size = space between lines */
`;

// We pass `style` as a prop to `StyledH2` so that custom styles are handled by styled components and not react (inline style)
const H1 = ({ children, isLoading, padded, style, ...props }) => (
  <Placeholder isLoading={isLoading} padded={padded} showLoadingAnimation>
    <StyledH1 padded={padded} customStyles={style} {...props}>
      {children}
    </StyledH1>
  </Placeholder>
);

H1.defaultProps = {
  isLoading: false,
};

H1.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

H1.displayName = 'ui-kit.typography.H1';

export default H1;
