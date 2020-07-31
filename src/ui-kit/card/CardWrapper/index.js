import styled from 'styled-components';
import PropTypes from 'prop-types';

// import { withIsLoading } from '../../isLoading';

const CardWrapper = styled.div.attrs({
  className: 'ui-kit-card-CardWrapper',
})`
  /* card styles */
  background: ${({ cardColor, theme }) =>
    cardColor ||
    theme.colors.background.paper ||
    `initial`}; /* bail out if no bg color */
  border-radius: ${({ theme }) => theme.sizing.baseBorderRadius};
  margin: ${({ inHorizontalList, theme }) =>
    inHorizontalList
      ? `${theme.sizing.baseUnit(0.5)}
      ${theme.sizing.baseUnit(0.5)}
      ${theme.sizing.baseUnit(0.75)}`
      : `${theme.sizing.baseUnit(0.75)} ${theme.sizing.baseUnit(1)}`};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

CardWrapper.propTypes = {
  cardColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardWrapper.displayName = 'ui-kit.card.CardWrapper';

export default CardWrapper;
