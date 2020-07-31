import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Line } from '../../Placeholder';

const verticalRhythm = css`
  ${({ padded, theme }) =>
    padded
      ? `${theme.helpers.verticalRhythm(1)} 0 ${theme.helpers.verticalRhythm(
          0.834
        )}`
      : 'initial'};
`;

const StyledH2 = styled.h2.attrs({
  className: 'ui-kit-typography-H2-StyledH2',
})`
  font-size: 2.25rem;
  font-weight: 900;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(2.25, 1.15)};
  margin: ${verticalRhythm};

  /* Styles passed via the style prop */
  ${({ customStyles }) => customStyles}
`;

const Placeholder = styled(Line).attrs({
  className: 'ui-kit-H1-Placeholder',
})`
  height: 2.25rem; /* Should match .h2font-size */
  margin: ${({ padded, theme }) =>
    // if padded...
    padded
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `calc(${theme.helpers.verticalRhythm(
          2.25,
          1.15
        )} - 2.25rem) 0`}; /* line-height - font-size = space between lines */
`;

// We pass `style` as a prop to `StyledH2` so that custom styles are handled by styled components and not react (inline style)
const H2 = ({ children, isLoading, padded, style, ...props }) => (
  <Placeholder isLoading={isLoading} padded={padded} showLoadingAnimation>
    <StyledH2 padded={padded} customStyles={style} {...props}>
      {children}
    </StyledH2>
  </Placeholder>
);

H2.defaultProps = {
  isLoading: false,
};

H2.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

H2.displayName = 'ui-kit.typography.H2';

export default H2;
