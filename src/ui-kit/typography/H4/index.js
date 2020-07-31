import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Line } from '../../Placeholder';

const verticalRhythm = css`
  ${({ padded, theme }) =>
    padded
      ? `${theme.helpers.verticalRhythm(0.66)} 0 ${theme.helpers.verticalRhythm(
          0.5
        )} 0;`
      : 'initial'};
`;

const StyledH4 = styled.h4.attrs({
  className: 'ui-kit-typography-H4-StyledH4',
})`
  font-size: 1rem;
  font-weight: 700;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(1)};
  margin: ${verticalRhythm};

  /* Styles passed via the style prop */
  ${({ customStyles }) => customStyles}
`;

const Placeholder = styled(Line).attrs({
  className: 'ui-kit-H4-Placeholder',
})`
  height: 1rem; /* Should match H4 font-size */
  margin: ${({ padded, theme }) =>
    // if padded...
    padded
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `calc(${theme.helpers.verticalRhythm(
          1
        )} - 1rem) 0`}; /* line-height - font-size = space between lines */
`;

// We pass `style` as a prop to `StyledH4` so that custom styles are handled by styled components and not react (inline style)
const H4 = ({ children, isLoading, padded, style, ...props }) => (
  <Placeholder isLoading={isLoading} padded={padded} showLoadingAnimation>
    <StyledH4 padded={padded} customStyles={style} {...props}>
      {children}
    </StyledH4>
  </Placeholder>
);

H4.defaultProps = {
  isLoading: false,
};

H4.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

H4.displayName = 'ui-kit.typography.H4';

export default H4;
