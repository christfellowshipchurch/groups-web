import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Line } from '../../Placeholder';
import { getIsLoading } from '../../isLoading';

const verticalRhythm = css`
  ${({ padded, theme }) =>
    padded ? `0 0 ${theme.helpers.verticalRhythm(0.375)} 0` : 'initial'};
`;

const StyledH6 = styled.h6.attrs({
  className: 'ui-kit-typography-H6-StyledH6',
})`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(0.75)};
  margin: ${verticalRhythm};
  ${({ customStyles }) => customStyles};
`;

const Placeholder = styled(Line).attrs({
  className: 'ui-kit-H6-Placeholder',
})`
  height: 0.75rem; /* Should match H6 font-size */
  margin: ${({ padded, theme }) =>
    // if padded...
    padded
      ? // return rhythm so placeholder matches text position to prevent jitter/jank
        verticalRhythm
      : // else default to...
        `0 0 calc(${theme.helpers.verticalRhythm(
          0.75
        )} - 0.75rem) 0`}; /* line-height - font-size = space between lines */
`;

// We pass `style` as a prop to `StyledH6` so that custom styles are handled by styled components and not react (inline style)
const H6 = getIsLoading(({ children, isLoading, padded, style, ...props }) => (
  <Placeholder isLoading={isLoading} padded={padded} showLoadingAnimation>
    <StyledH6 padded={padded} customStyles={style} {...props}>
      {children}
    </StyledH6>
  </Placeholder>
));

H6.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

H6.displayName = 'ui-kit.typography.H6';

export default H6;
