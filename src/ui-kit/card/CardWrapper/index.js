import styled from 'styled-components';
import PropTypes from 'prop-types';

import { withOverrides } from '../../theme';
import { withIsLoading } from '../../isLoading';

const CardWrapper = styled.div.attrs(withOverrides('ui-kit.card.CardWrapper'))`
  /* card styles */
  background: ${({ cardColor, theme }) =>
    cardColor ||
    theme.colors.background.paper ||
    `initial`}; /* bail out if no bg color */
  border-radius: ${({ theme }) => theme.sizing.baseBorderRadius};
  box-shadow: ${({ theme }) => theme.shadows.default};
  margin: ${({ inHorizontalList, theme }) =>
    inHorizontalList
      ? `${theme.sizing.baseUnit(0.5)}
      ${theme.sizing.baseUnit(0.5)}
      ${theme.sizing.baseUnit(0.75)}`
      : `${theme.sizing.baseUnit(0.75)} ${theme.sizing.baseUnit(1)}`};
`;

CardWrapper.propTypes = {
  cardColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

CardWrapper.displayName = 'ui-kit.card.CardWrapper';

export default withIsLoading(CardWrapper);
