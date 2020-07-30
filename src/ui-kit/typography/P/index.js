import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Paragraph } from '../../Placeholder';

const StyledP = styled.p`
  font-size: 1rem;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(1)};
  margin: 0 0 ${({ theme }) => theme.helpers.verticalRhythm(1)} 0;
  ${({ customStyle }) => customStyle}
`;

const P = ({ children, isLoading, style, ...props }) => (
  <Paragraph isLoading={isLoading} showLoadingAnimation>
    <StyledP customStyle={style} {...props}>
      {children}
    </StyledP>
  </Paragraph>
);

P.defaultProps = {
  isLoading: false,
};

P.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

P.displayName = 'ui-kit.typography.P';

export default P;
