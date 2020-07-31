import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Line } from '../../Placeholder';

const verticalRhythm = css`
  ${({ padded, theme }) =>
    padded
      ? `${theme.helpers.verticalRhythm(
          1.125
        )} 0 ${theme.helpers.verticalRhythm(0.75)} 0`
      : 'initial'};
`;

const StyledH3 = styled.h3.attrs({
  className: 'ui-kit-typography-H3-StyledH3',
})`
  font-size: 1.5rem;
  font-weight: 900;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(1.5, 1.15)};
  margin: ${verticalRhythm};

  /* Styles passed via the style prop */
  ${({ customStyles }) => customStyles}
`;

const Placeholder = styled(Line).attrs({
  className: 'ui-kit-H1-Placeholder',
})`
  height: 1.5rem; /* Should match H3 font-size */
  margin: ${({ padded, theme }) =>
    // if padded...
    padded
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `calc(${theme.helpers.verticalRhythm(
          1.5,
          1.15
        )} - 1.5rem) 0`}; /* line-height - font-size = space between lines */
`;

// We pass `style` as a prop to `StyledH3` so that custom styles are handled by styled components and not react (inline style)
const H3 = ({ children, isLoading, padded, style, ...props }) => (
  <Placeholder isLoading={isLoading} padded={padded} showLoadingAnimation>
    <StyledH3 padded={padded} customStyles={style} {...props}>
      {children}
    </StyledH3>
  </Placeholder>
);

H3.defaultProps = {
  isLoading: false,
};

H3.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

H3.displayName = 'ui-kit.typography.H3';

export default H3;
