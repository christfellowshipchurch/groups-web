import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Line } from '../../Placeholder';

const verticalRhythm = css`
  margin: ${({ padded, theme }) =>
    padded ? `0 0 ${theme.helpers.verticalRhythm(0.375)} 0` : 'initial'};
`;

const StyledH6 = styled.h6.attrs({
  className: 'ui-kit-typography-H6-StyledH6',
})`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(0.75)};

  ${verticalRhythm}
`;

const Placeholder = styled(Line).attrs({
  className: 'ui-kit-H6-Placeholder',
})`
  height: 0.875rem; /* Should match H6 font-size */

  ${verticalRhythm}
`;

const H6 = ({ children, isLoading, padded, ...props }) => (
  <Placeholder isLoading={isLoading} padded={padded} showLoadingAnimation>
    <StyledH6 padded={padded} {...props}>
      {children}
    </StyledH6>
  </Placeholder>
);

H6.defaultProps = {
  isLoading: false,
};

H6.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  padded: PropTypes.bool,
};

H6.displayName = 'ui-kit.typography.H6';

export default H6;
