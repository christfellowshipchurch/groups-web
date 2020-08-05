import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { withOverrides } from '../../theme';
import { Paragraph as Placeholder } from '../../Placeholder';
import { getIsLoading } from '../../isLoading';

const StyledP = styled.p.attrs(withOverrides('uiKit.typography.P.StyledP'))`
  font-size: 1rem;
  line-height: ${({ theme }) => theme.helpers.verticalRhythm(1)};
  margin: 0 0 ${({ theme }) => theme.helpers.verticalRhythm(1)} 0;

  /* Styles passed via the style prop and/or overrides */
  ${({ $style }) => $style}
`;

const P = getIsLoading(({ children, isLoading, style, ...props }) => (
  <Placeholder isLoading={isLoading} showLoadingAnimation>
    <StyledP $style={style} {...props}>
      {children}
    </StyledP>
  </Placeholder>
));

P.defaultProps = {
  isLoading: false,
};

P.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  style: PropTypes.any, // eslint-disable-line
};

P.displayName = 'ui-kit.typography.P';

export default styled(P).attrs(withOverrides('uiKit.typography.P'))``;
