import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { Line } from '../../Placeholder';

const verticalRhythm = css`
  margin: ${({ padded, theme }) =>
    padded ? `${theme.helpers.verticalRhythm(2.015625)} 0` : 'initial'};
`;

const StyledH1 = styled.h1.attrs({
  className: 'ui-kit-H1-StyledH1',
})`
  font-size: 2.6875rem;
  font-weight: 900;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(2.6875, 1.15)};

  ${verticalRhythm}
`;

const Placeholder = styled(Line).attrs({
  className: 'ui-kit-H1-Placeholder',
})`
  height: 2.6875rem; /*  hould match .h1 font-size */

  ${verticalRhythm}
`;

const H1 = ({ children, isLoading, padded, ...props }) => (
  <Placeholder isLoading={isLoading} padded={padded} showLoadingAnimation>
    <StyledH1 padded={padded} {...props}>
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
};

H1.displayName = 'ui-kit.typography.H1';

export default H1;
